#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <BMP388_DEV.h> 
#include "I2Cdev.h"
#include "MPU6050_6Axis_MotionApps20.h"


#ifdef _ESP32_HAL_I2C_H_
#define SDA_PIN 21
#define SCL_PIN 22
#endif

#if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
#include "Wire.h"
#endif
MPU6050 mpu;

#define OUTPUT_READABLE_YAWPITCHROLL

#define INTERRUPT_PIN 2  // use pin 2 on Arduino Uno & most boards
// #define LED_PIN 13 // (Arduino is 13, Teensy is 11, Teensy++ is 6)
//bool blinkState = false;

bool dmpReady = false;  // set true if DMP init was successful
uint8_t mpuIntStatus;   // holds actual interrupt status byte from MPU
uint8_t devStatus;      // return status after each device operation (0 = success, !0 = error)
uint16_t packetSize;    // expected DMP packet size (default is 42 bytes)
uint16_t fifoCount;     // count of all bytes currently in FIFO
uint8_t fifoBuffer[64]; // FIFO storage buffer

// orientation/motion vars
Quaternion q;           // [w, x, y, z]         quaternion container
VectorInt16 aa;         // [x, y, z]            accel sensor measurements
VectorInt16 aaReal;     // [x, y, z]            gravity-free accel sensor measurements
VectorInt16 aaWorld;    // [x, y, z]            world-frame accel sensor measurements
VectorFloat gravity;    // [x, y, z]            gravity vector
float euler[3];         // [psi, theta, phi]    Euler angle container
float ypr[3];           // [yaw, pitch, roll]   yaw/pitch/roll container and gravity vector

// packet structure for InvenSense teapot demo
uint8_t teapotPacket[14] = { '$', 0x02, 0,0, 0,0, 0,0, 0,0, 0x00, 0x00, '\r', '\n' };

volatile bool mpuInterrupt = false;     // indicates whether MPU interrupt pin has gone high
void dmpDataReady() {
    mpuInterrupt = true;
}


#define BMP388_I2C_ADDR 0x77
#define BMP388_ID 0x50
BMP388_DEV bmp388; 

/*#define SEALEVELPRESSURE_HPA (1013.25)
Adafruit_BMP3XX bmp;*/

float V_0 = 5.0; // supply voltage to the pressure sensor    //pitot tube
float rho = 1.204; // density of air
//const int analogpin = 33;
//std::round;
// parameters for averaging and offset
int offset = 0;
int offset_size = 10;
int veloc_mean_size = 20;
int zero_span = 2;

//    RF24 radio(9, 8); 
//RF24 radio(22, 21); // CE, CSN
RF24 radio(4, 5);

int i=0;   
float altitude=0.0f;
const byte address[6] = "00010";   
  
void setup() 
{
  Serial.begin(115200);
  radio.begin();                 
  radio.openWritingPipe("00010"); 
  radio.setPALevel(RF24_PA_MAX);  
  

  for (int ii = 0; ii < offset_size; ii++)   //pitot tube
  {
    offset += analogRead(A0) - (1023 / 2);
  }
  offset /= offset_size;

  #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE //mpu_dmp
        Wire.begin();
        Wire.setClock(400000); // 400kHz I2C clock. Comment this line if having compilation difficulties
    #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
        Fastwire::setup(400, true);
    #endif
  while (!Serial);
  mpu.initialize();
    pinMode(INTERRUPT_PIN, INPUT);
    Serial.println(F("Testing device connections..."));
    Serial.println(mpu.testConnection() ? F("MPU6050 connection successful") : F("MPU6050 connection failed"));

 while (Serial.available() && Serial.read()); // empty buffer
    while (!Serial.available());                 // wait for data
    while (Serial.available() && Serial.read()); // empty buffer again
 
    Serial.println(F("Initializing DMP..."));
 devStatus = mpu.dmpInitialize();
 mpu.setXGyroOffset(220);
    mpu.setYGyroOffset(76);
    mpu.setZGyroOffset(-85);
    mpu.setZAccelOffset(1788); // 1688 factory default for my test chip
  if (devStatus == 0) {
        // Calibration Time: generate offsets and calibrate our MPU6050
        mpu.CalibrateAccel(6);
        mpu.CalibrateGyro(6);
        mpu.PrintActiveOffsets();
        mpu.setDMPEnabled(true);
        Serial.print(F("Enabling interrupt detection (Arduino external interrupt "));
        Serial.print(digitalPinToInterrupt(INTERRUPT_PIN));
        Serial.println(F(")..."));
        attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), dmpDataReady, RISING);
        mpuIntStatus = mpu.getIntStatus();
        Serial.println(F("DMP ready! Waiting for first interrupt..."));
               dmpReady = true;
        packetSize = mpu.dmpGetFIFOPacketSize();
    } else {
       Serial.print(F("DMP Initialization failed (code "));
        Serial.print(devStatus);
        Serial.println(F(")"));
    
    }
        
  //bmp
  bmp388.begin();                                   // Default initialisation, place the BMP388 into SLEEP_MODE 
  bmp388.setTimeStandby(TIME_STANDBY_1280MS);       // Set the standby time to 1.3 seconds
  bmp388.startNormalConversion();                   // Start BMP388 continuous conversion in NORMAL_MODE  
  Serial.println("BMP started");



  radio.stopListening();  
}

void loop()
{
  Serial.println(i);         //counter
  radio.write(&i, sizeof(i)); 
  i++;   


 float adc_avg = 0; float veloc = 0.0;      //pitot
  // average a few ADC readings for stability
  for (int ii = 0; ii < veloc_mean_size; ii++) {
    adc_avg += analogRead(A0) - offset;
  }
  adc_avg /= veloc_mean_size;

  // make sure if the ADC reads below , then we equate it to a negative velocity
  if (adc_avg > 512 - zero_span and adc_avg < 512 + zero_span) {
  } else {
    if (adc_avg < 512) {
      veloc = -sqrt((-10000.0 * ((adc_avg / 1023.0) - 0.5)) / rho);
    } else {
      veloc = sqrt((10000.0 * ((adc_avg / 1023.0) - 0.5)) / rho);
    }
  }
  Serial.println(veloc);
  radio.write(&veloc, sizeof(veloc));

  float altitude;// = bmp.getAltitude();               //bmp
  uint8_t getAltitude(volatile float &altitude);  
  radio.write(&altitude, sizeof(altitude));
  Serial.println(altitude);
  if (bmp388.getAltitude(altitude))    // Check if the measurement is complete
  {
    radio.write(&altitude, sizeof(altitude));
    Serial.print(altitude);
    Serial.println(F("m"));  
  }

/*************** mpu_dmp **************/
  // if programming failed, don't try to do anything 
    if (!dmpReady) return;
    // read a packet from FIFO
    if (mpu.dmpGetCurrentFIFOPacket(fifoBuffer)) { // Get the Latest packet 
        #ifdef OUTPUT_READABLE_QUATERNION
            // display quaternion values in easy matrix form: w x y z
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            Serial.print("quat\t");
            Serial.print(q.w);
            Serial.print("\t");
            Serial.print(q.x);
            Serial.print("\t");
            Serial.print(q.y);
            Serial.print("\t");
            Serial.println(q.z);

            radio.write(&quant, sizeof(quant));
        #endif

        #ifdef OUTPUT_READABLE_EULER
            // display Euler angles in degrees
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetEuler(euler, &q);
            Serial.print("euler\t");
            Serial.print(euler[0] * 180/M_PI);
            Serial.print("\t");
            Serial.print(euler[1] * 180/M_PI);
            Serial.print("\t");
            Serial.println(euler[2] * 180/M_PI);

            radio.write(&euler, sizeof(euler));
        #endif

        #ifdef OUTPUT_READABLE_YAWPITCHROLL
            // display Euler angles in degrees
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
            Serial.print("ypr\t");
            Serial.print(ypr[0] * 180/M_PI);
            Serial.print("\t");
            Serial.print(ypr[1] * 180/M_PI);
            Serial.print("\t");
            Serial.println(ypr[2] * 180/M_PI);

            radio.write(&ypr, sizeof(ypr));
        #endif

        #ifdef OUTPUT_READABLE_REALACCEL
            // display real acceleration, adjusted to remove gravity
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetAccel(&aa, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
            Serial.print("areal\t");
            Serial.print(aaReal.x);
            Serial.print("\t");
            Serial.print(aaReal.y);
            Serial.print("\t");
            Serial.println(aaReal.z);

            radio.write(&aareal, sizeof(aareal));
        #endif

        #ifdef OUTPUT_READABLE_WORLDACCEL
            // display initial world-frame acceleration, adjusted to remove gravity
            // and rotated based on known orientation from quaternion
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetAccel(&aa, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
            mpu.dmpGetLinearAccelInWorld(&aaWorld, &aaReal, &q);
            Serial.print("aworld\t");
            Serial.print(aaWorld.x);
            Serial.print("\t");
            Serial.print(aaWorld.y);
            Serial.print("\t");
            Serial.println(aaWorld.z);

            radio.write(&aaworld, sizeof(aaworld));
        #endif
    
        #ifdef OUTPUT_TEAPOT
            // display quaternion values in InvenSense Teapot demo format:
            teapotPacket[2] = fifoBuffer[0];
            teapotPacket[3] = fifoBuffer[1];
            teapotPacket[4] = fifoBuffer[4];
            teapotPacket[5] = fifoBuffer[5];
            teapotPacket[6] = fifoBuffer[8];
            teapotPacket[7] = fifoBuffer[9];
            teapotPacket[8] = fifoBuffer[12];
            teapotPacket[9] = fifoBuffer[13];
            Serial.write(teapotPacket, 14);
            teapotPacket[11]++; // packetCount, loops at 0xFF on purpose
        #endif

        // blink LED to indicate activity
        // blinkState = !blinkState;
        // digitalWrite(LED_PIN, blinkState);
    }


  Serial.println();        //just for grouping different data packets
  delay(1000);
}

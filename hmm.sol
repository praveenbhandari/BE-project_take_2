// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.1 <=0.9.0;

contract mini {
    
    struct borower {
        string name;
        string email;
        address[] borrower_list;
        string aadhar;
        string pan;
        uint256 phone;
        string gender;
        uint256 a_income;
        uint256 no_of_dependents;
        uint256[] loan_ids;
        uint256 received_ammount;
        uint256 creditscore;
        uint256 creditworthiness;
        lenders len;
    }
    struct lenders{
        address[] lenders_addr;
        uint256 amount;
    }

    struct lender {
        string name;
        string aadhar;
        address[] lender_list;
        string pan;
        string email;
        address[] funded_ids;
        borrowers bor;
    }
    struct borrowers{
        address[] borrower_addr;
        uint256 amount;
    }

    struct loan_applications{
        uint256 loan_idd;
        address borrower_ac_address;
        string roii;
        uint256 loan_amountt;
        uint256 l_purpose;
        uint256 term;
        address lender_acc;
        address[] lender_accss;
    }


    uint256[] public loans;
    address[] public borower_list;
    address[] public lender_list;
    address[] public approved_loans;

    mapping(address => borower) borowerInfo;
    mapping(uint256 => loan_applications) loans_datas;
    mapping(address => lender) lenderInfo;

    function user(string memory name,string memory email,uint256 pos,string memory aadhar,string memory pan,uint256 phone,string memory gender,uint256 a_income,uint256 no_of_depeden) public returns (string memory) {
        address addr = msg.sender;
        if (pos == 0) {
            borower memory b;
            b.name = name;
            b.aadhar = aadhar;
            b.email = email;
            b.pan = pan;
            b.phone = phone;
            b.gender = gender;
            b.a_income = a_income;
            b.no_of_dependents = no_of_depeden;
            borowerInfo[msg.sender] = b;
            borower_list.push(addr);
            return name;
        } else if (pos == 1) {
            lenderInfo[addr].name = name;
            lenderInfo[addr].aadhar = aadhar;
            lenderInfo[addr].pan = pan;
            lenderInfo[addr].email = email;
            lender_list.push(addr);
            return name;
        } else {
            revert();
        }
    }


    function approved_loan_ids(uint256 lo_amount,uint256 lo_purpose,uint termmm,string memory roiii,uint creditscore,uint creditworthiness)public{
        address a=msg.sender;
        uint256 b_num=block.number;
        loans_datas[b_num].loan_amountt=lo_amount;
        loans_datas[b_num].borrower_ac_address=a;
        loans_datas[b_num].roii=roiii;
        loans_datas[b_num].loan_idd=b_num;
        loans_datas[b_num].loan_amountt=lo_amount;
        loans_datas[b_num].l_purpose=lo_purpose;
        loans_datas[b_num].term=termmm;
        borowerInfo[a].creditworthiness=creditworthiness;
        borowerInfo[a].creditscore=creditscore;
        borowerInfo[a].loan_ids.push(b_num);
        loans.push(b_num);



    }

    function get()public view returns(uint256[] memory){
        return  borowerInfo[msg.sender].loan_ids;
    } 
    function get_l()public view returns(uint256[] memory){
        return  loans;
    }

    function get_loann(uint256 b_num)public view returns(uint256 ,address,string memory,uint256,uint256,uint256,address[] memory){

        return (
        loans_datas[b_num].loan_idd,
        loans_datas[b_num].borrower_ac_address,
        loans_datas[b_num].roii,
        loans_datas[b_num].loan_amountt,
        loans_datas[b_num].l_purpose,
        loans_datas[b_num].term,
        loans_datas[b_num].lender_accss
        );
    }

    function sendmoneyy(address payable to,uint256 b_num)public payable returns (uint256) {   
        loans_datas[b_num].lender_accss.push(msg.sender);
        loans_datas[b_num].loan_amountt=loans_datas[b_num].loan_amountt-msg.value;
        // if(loans_datas[b_num].loan_amountt == 0){
        // borowerInfo[msg.sender].loan_ids.pop(b_num);
        // loans_datas[b_num].lender_acc
        // }

        borowerInfo[to].len.lenders_addr.push(msg.sender);
        borowerInfo[to].len.amount=msg.value;
        borowerInfo[to].received_ammount= borowerInfo[to].received_ammount+msg.value;
        lenderInfo[msg.sender].funded_ids.push(address(to));
        lenderInfo[msg.sender].bor.borrower_addr.push(to);
        lenderInfo[msg.sender].bor.amount=msg.value;
        
        to.transfer(msg.value);
        return msg.value;
    }

    function get_borrower(address addr)public view returns (string memory,string memory,uint256,uint256,
    uint256,uint256,uint256,uint256,uint256[] memory,address[] memory,uint256 )
    {
        borower memory bb = borowerInfo[addr];
        return (
            bb.name,
            bb.aadhar,
           bb.a_income,
           bb.no_of_dependents,
           bb.phone,
           bb.received_ammount,
           bb.creditscore,
           bb.creditworthiness,
           bb.loan_ids,
           bb.len.lenders_addr,
           bb.len.amount
     
        );
    }

 
    function get_lender(address addr)public view returns (string memory,string memory,string memory,string memory,address[] memory,uint256,address[] memory ){
        return (
            lenderInfo[addr].name,
            lenderInfo[addr].email,
            lenderInfo[addr].pan,
            lenderInfo[addr].aadhar,
            lenderInfo[addr].bor.borrower_addr,
            lenderInfo[addr].bor.amount,
            lenderInfo[addr].funded_ids
        );
    }

    function get_borrower_list() public view returns (address[] memory) {
        return borower_list;
    }

    function get_lender_list() public view returns (address[] memory) {
        return lender_list;
    }

    }

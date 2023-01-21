// ToDo: on ganache!!!!
// and edge check

// const { default: Web3 } = require("web3");

// const http = require('http')
// var acc = "null";
// var cors = require('cors');
// // app.use(cors());
// console.log(window.ethereum)
// const server = http.createServer((req, res) => {

//     (async () => {
//         if (window.ethereum) {
//             window.ethereum.send('eth_requestAccounts');
//             window.web3 = new Web3(window.ethereum);

//             var accounts = web3.eth.getAccounts();
//             acc = accounts[0];
//             console.log(acc);
//         }
//         else {
//             console.log("else")
//             // res.write(acc)
//         }
//     })();
//     res.write(acc);
//     res.end();
// });
// server.listen(8080);
// var Web3 = require('web3');

// if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
//     window.Web3 = Web3;
// }

// web3 = new Web3(window.currentProvider);
// window.ethereum.enable().catch((error) => {
//     // User denied account access
//     console.log(error);
// });
// console.log(web3);
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
//     console.log(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// }
// const Web3 = Web3

// var Web3=require('web3')
// var Web3 = require('./lib/web3');
var roiii,creedit_scor,creddit_w,termmm,lloan_type,propp_val,aanual_inc,pp_o_loan,lloan_amm;
var statuss=0;
document.addEventListener('DOMContentLoaded', function () {
    try {

        var a = document.querySelector('#register');
        if (a) { a.addEventListener('click', () => getRegisterData()); }
        var b = document.querySelector('#add_user');
        if (b) { b.addEventListener('click', () => add_user()); }
        var c = document.querySelector('#connectt_user');
        if (c) { c.addEventListener('click', () => connectt()); }

        // document.querySelector('#get_lender').addEventListener('click', () => get_lender());
        var d = document.querySelector('#te');
        if (d) { d.addEventListener('click', () => getRegisterData()); }
        var e = document.querySelector('#apply_l');
        // if (e) { e.addEventListener('click', () => apply_loan()); }
        // var f = document.querySelector('#aa');
        // if (f) { f.addEventListener('click', () => apply_loan()); }
        var g = document.querySelector('#get_borower');
        // if (g) { g.addEventListener('click', () => get_borower()); }
        // var g = document.querySelector('#app');
        // if (g) { g.addEventListener('click', () => apply_loan()); }


        roiii=JSON.parse(document.getElementById('roi').textContent)
        statuss=JSON.parse(document.getElementById('status').textContent)
        lloan_amm=JSON.parse(document.getElementById('loan_a').textContent)
        aanual_inc=JSON.parse(document.getElementById('a_income').textContent)
        creedit_scor=JSON.parse(document.getElementById('credit_score').textContent)
        creddit_w=JSON.parse(document.getElementById('credit_worthiness').textContent)
        lloan_type=JSON.parse(document.getElementById('loan_type').textContent)
        propp_val=JSON.parse(document.getElementById('property_value').textContent)
        pp_o_loan=JSON.parse(document.getElementById('p_o_loan').textContent)
        termmm=JSON.parse(document.getElementById('term').textContent)

        // got from viesw.py
        console.log(roiii)
        console.log(statuss)
    }
    catch (e) { console.log("ee", e) }
});


var web3 = new Web3(window.ethereum);
// var Contract = require('web3-eth-contract');
var acc = null;
// var key 0xcC0D6FEaC2dbb9bFa7F5dc438F0CE089757A1e0c  0x00FE0b15775bCa92f7414D7aD9a1A0426b3C347F 0xB59fb2cC2789B805A0341C13751d56c657A938e4 0x21dac808379CceD51ce7D15bFb9DACbF895F1064
// 0x7eccC24A5000c64C96994F759b033bDA5c9bBE3F
var contract_addr = "0x1623388Bda883e7Ef661e76eedDf1183F79cd65f"
window.onload = function () {
    connectt();
};

const connectt = async () => {
    console.log("connectt")
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        acc = accounts[0];
        console.log("if ", acc);
        (async () => {
            // 0x6F61bd9CEb8A8291b20dC90f11cE7D37d77fDE92
            // 0x18fc00dDD817620c0Cb02516Fd73E8658B659e13
            call_contract(contract_addr);
        })();

    }
    else {
        console.log("else")
        // res.write(acc)
    }
    // get_borower()
    if(statuss == 1){
        apply_loan();
    }
};





var abi = JSON.parse('[{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"add_approved_loan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lo_amount","type":"uint256"},{"internalType":"uint256","name":"lo_purpose","type":"uint256"},{"internalType":"uint256","name":"termmm","type":"uint256"},{"internalType":"string","name":"roiii","type":"string"},{"internalType":"uint256","name":"creditscore","type":"uint256"},{"internalType":"uint256","name":"creditworthiness","type":"uint256"}],"name":"approved_loan_ids","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"approved_loans","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_approvedLoans","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_loan","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l_l","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"loans","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"sendmoneyy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"phone","type":"uint256"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"uint256","name":"a_income","type":"uint256"},{"internalType":"uint256","name":"no_of_depeden","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');


// var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"paisaa","type":"uint256"}],"name":"sendmoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"score","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');
var bytecode = "608060405234801561001057600080fd5b50612d5f806100206000396000f3fe6080604052600436106100fe5760003560e01c80636d4ce63c11610095578063cf3a5a1c11610064578063cf3a5a1c14610348578063d038487114610388578063d08e7279146103c5578063d7033d68146103f0578063e1ec3c681461042d576100fe565b80636d4ce63c1461027a57806387eea5fc146102a557806393971127146102e2578063b1f07cfd1461030b576100fe565b80634e94b75d116100d15780634e94b75d146101b5578063522ac9c0146101f65780635ea5e910146102265780636bd04e561461024f576100fe565b806312065fe01461010357806328ce10a81461012e5780632f9c26231461015f5780633f8ee26b1461018a575b600080fd5b34801561010f57600080fd5b5061011861046a565b6040516101259190612996565b60405180910390f35b34801561013a57600080fd5b50610143610472565b60405161015697969594939291906129b1565b60405180910390f35b34801561016b57600080fd5b50610174610749565b604051610181919061286e565b60405180910390f35b34801561019657600080fd5b5061019f6107d7565b6040516101ac919061286e565b60405180910390f35b3480156101c157600080fd5b506101dc60048036038101906101d7919061246c565b610865565b6040516101ed959493929190612935565b60405180910390f35b610210600480360381019061020b9190612499565b610fc7565b60405161021d9190612996565b60405180910390f35b34801561023257600080fd5b5061024d6004803603810190610248919061246c565b611201565b005b34801561025b57600080fd5b50610264611267565b604051610271919061286e565b60405180910390f35b34801561028657600080fd5b5061028f6112f5565b60405161029c9190612890565b60405180910390f35b3480156102b157600080fd5b506102cc60048036038101906102c7919061261c565b611390565b6040516102d99190612853565b60405180910390f35b3480156102ee57600080fd5b5061030960048036038101906103049190612649565b6113cf565b005b34801561031757600080fd5b50610332600480360381019061032d919061261c565b6116dd565b60405161033f9190612853565b60405180910390f35b34801561035457600080fd5b5061036f600480360381019061036a919061246c565b61171c565b60405161037f94939291906128d4565b60405180910390f35b34801561039457600080fd5b506103af60048036038101906103aa919061261c565b611a69565b6040516103bc9190612853565b60405180910390f35b3480156103d157600080fd5b506103da611aa8565b6040516103e7919061286e565b60405180910390f35b3480156103fc57600080fd5b50610417600480360381019061041291906124c6565b611b36565b60405161042491906128b2565b60405180910390f35b34801561043957600080fd5b50610454600480360381019061044f919061261c565b612053565b6040516104619190612853565b60405180910390f35b600042905090565b6000806060600080600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160000154600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a01600201600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160030154600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160040154600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160050154600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168480546106b290612bcf565b80601f01602080910402602001604051908101604052809291908181526020018280546106de90612bcf565b801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b50505050509450965096509650965096509650965090919293949596565b606060038054806020026020016040519081016040528092919081815260200182805480156107cd57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610783575b5050505050905090565b6060600180548060200260200160405190810160405280929190818152602001828054801561085b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610811575b5050505050905090565b606080600080600080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806101c00160405290816000820180546108c990612bcf565b80601f01602080910402602001604051908101604052809291908181526020018280546108f590612bcf565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b5050505050815260200160018201805461095b90612bcf565b80601f016020809104026020016040519081016040528092919081815260200182805461098790612bcf565b80156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610a6257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a18575b50505050508152602001600382018054610a7b90612bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa790612bcf565b8015610af45780601f10610ac957610100808354040283529160200191610af4565b820191906000526020600020905b815481529060010190602001808311610ad757829003601f168201915b50505050508152602001600482018054610b0d90612bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3990612bcf565b8015610b865780601f10610b5b57610100808354040283529160200191610b86565b820191906000526020600020905b815481529060010190602001808311610b6957829003601f168201915b5050505050815260200160058201548152602001600682018054610ba990612bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd590612bcf565b8015610c225780601f10610bf757610100808354040283529160200191610c22565b820191906000526020600020905b815481529060010190602001808311610c0557829003601f168201915b50505050508152602001600782015481526020016008820154815260200160098201805480602002602001604051908101604052809291908181526020016000905b82821015610d10578382906000526020600020018054610c8390612bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610caf90612bcf565b8015610cfc5780601f10610cd157610100808354040283529160200191610cfc565b820191906000526020600020905b815481529060010190602001808311610cdf57829003601f168201915b505050505081526020019060010190610c64565b505050508152602001600a820160405180610120016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054610d9990612bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc590612bcf565b8015610e125780601f10610de757610100808354040283529160200191610e12565b820191906000526020600020905b815481529060010190602001808311610df557829003601f168201915b505050505081526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160078201805480602002602001604051908101604052809291908181526020018280548015610f1457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610eca575b5050505050815260200160088201805480602002602001604051908101604052809291908181526020018280548015610f6c57602002820191906000526020600020905b815481526020019060010190808311610f58575b505050505081525050815260200160138201548152602001601482015481526020016015820154815250509050806000015181606001518260e001518361010001518460a00151955095509550955095505091939590929450565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206006016001018190555033600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a016003015461116c9190612b0b565b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020601301819055508173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156111f8573d6000803e3d6000fd5b50349050919050565b6003819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060008054806020026020016040519081016040528092919081815260200182805480156112eb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116112a1575b5050505050905090565b6060600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160080180548060200260200160405190810160405280929190818152602001828054801561138657602002820191906000526020600020905b815481526020019060010190808311611372575b5050505050905090565b600381815481106113a057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000339050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160080143908060018154018082558091505060019003906000526020600020016000909190919091505543600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a016000018190555080600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a0160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a016002019080519060200190611567929190612092565b5086600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a016003018190555085600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a016004018190555084600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a016005018190555081600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206015018190555082600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206014018190555050505050505050565b600181815481106116ed57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606080606080600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010183805461183690612bcf565b80601f016020809104026020016040519081016040528092919081815260200182805461186290612bcf565b80156118af5780601f10611884576101008083540402835291602001916118af565b820191906000526020600020905b81548152906001019060200180831161189257829003601f168201915b505050505093508280546118c290612bcf565b80601f01602080910402602001604051908101604052809291908181526020018280546118ee90612bcf565b801561193b5780601f106119105761010080835404028352916020019161193b565b820191906000526020600020905b81548152906001019060200180831161191e57829003601f168201915b5050505050925081805461194e90612bcf565b80601f016020809104026020016040519081016040528092919081815260200182805461197a90612bcf565b80156119c75780601f1061199c576101008083540402835291602001916119c7565b820191906000526020600020905b8154815290600101906020018083116119aa57829003601f168201915b505050505091508080546119da90612bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054611a0690612bcf565b8015611a535780601f10611a2857610100808354040283529160200191611a53565b820191906000526020600020905b815481529060010190602001808311611a3657829003601f168201915b5050505050905093509350935093509193509193565b60028181548110611a7957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606002805480602002602001604051908101604052809291908181526020018280548015611b2c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611ae2575b5050505050905090565b606060003390506000891415611e7057611b4e612118565b8b81600001819052508881606001819052508a8160200181905250878160800181905250868160a0018181525050858160c00181905250848160e0018181525050838161010001818152505080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190611bf6929190612092565b506020820151816001019080519060200190611c13929190612092565b506040820151816002019080519060200190611c3092919061218d565b506060820151816003019080519060200190611c4d929190612092565b506080820151816004019080519060200190611c6a929190612092565b5060a0820151816005015560c0820151816006019080519060200190611c91929190612092565b5060e082015181600701556101008201518160080155610120820151816009019080519060200190611cc4929190612217565b5061014082015181600a016000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190611d3c929190612092565b50606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e0820151816007019080519060200190611dbe92919061218d565b50610100820151816008019080519060200190611ddc929190612277565b505050610160820151816013015561018082015181601401556101a082015181601501559050506001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508b92505050612046565b6001891415612041578a600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190611ecf929190612092565b5087600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019080519060200190611f26929190612092565b5086600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003019080519060200190611f7d929190612092565b5089600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019080519060200190611fd4929190612092565b506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508a915050612046565b600080fd5b9998505050505050505050565b6000818154811061206357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805461209e90612bcf565b90600052602060002090601f0160209004810192826120c05760008555612107565b82601f106120d957805160ff1916838001178555612107565b82800160010185558215612107579182015b828111156121065782518255916020019190600101906120eb565b5b50905061211491906122c4565b5090565b604051806101c00160405280606081526020016060815260200160608152602001606081526020016060815260200160008152602001606081526020016000815260200160008152602001606081526020016121726122e1565b81526020016000815260200160008152602001600081525090565b828054828255906000526020600020908101928215612206579160200282015b828111156122055782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906121ad565b5b50905061221391906122c4565b5090565b828054828255906000526020600020908101928215612266579160200282015b82811115612265578251829080519060200190612255929190612092565b5091602001919060010190612237565b5b5090506122739190612359565b5090565b8280548282559060005260206000209081019282156122b3579160200282015b828111156122b2578251825591602001919060010190612297565b5b5090506122c091906122c4565b5090565b5b808211156122dd5760008160009055506001016122c5565b5090565b60405180610120016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081525090565b5b808211156123795760008181612370919061237d565b5060010161235a565b5090565b50805461238990612bcf565b6000825580601f1061239b57506123ba565b601f0160209004906000526020600020908101906123b991906122c4565b5b50565b60006123d06123cb84612a4c565b612a27565b9050828152602081018484840111156123ec576123eb612cc4565b5b6123f7848285612b8d565b509392505050565b60008135905061240e81612ce4565b92915050565b60008135905061242381612cfb565b92915050565b600082601f83011261243e5761243d612cbf565b5b813561244e8482602086016123bd565b91505092915050565b60008135905061246681612d12565b92915050565b60006020828403121561248257612481612cce565b5b6000612490848285016123ff565b91505092915050565b6000602082840312156124af576124ae612cce565b5b60006124bd84828501612414565b91505092915050565b60008060008060008060008060006101208a8c0312156124e9576124e8612cce565b5b60008a013567ffffffffffffffff81111561250757612506612cc9565b5b6125138c828d01612429565b99505060208a013567ffffffffffffffff81111561253457612533612cc9565b5b6125408c828d01612429565b98505060406125518c828d01612457565b97505060608a013567ffffffffffffffff81111561257257612571612cc9565b5b61257e8c828d01612429565b96505060808a013567ffffffffffffffff81111561259f5761259e612cc9565b5b6125ab8c828d01612429565b95505060a06125bc8c828d01612457565b94505060c08a013567ffffffffffffffff8111156125dd576125dc612cc9565b5b6125e98c828d01612429565b93505060e06125fa8c828d01612457565b92505061010061260c8c828d01612457565b9150509295985092959850929598565b60006020828403121561263257612631612cce565b5b600061264084828501612457565b91505092915050565b60008060008060008060c0878903121561266657612665612cce565b5b600061267489828a01612457565b965050602061268589828a01612457565b955050604061269689828a01612457565b945050606087013567ffffffffffffffff8111156126b7576126b6612cc9565b5b6126c389828a01612429565b93505060806126d489828a01612457565b92505060a06126e589828a01612457565b9150509295509295509295565b60006126fe8383612722565b60208301905092915050565b60006127168383612835565b60208301905092915050565b61272b81612b3f565b82525050565b61273a81612b3f565b82525050565b600061274b82612a9d565b6127558185612ad8565b935061276083612a7d565b8060005b8381101561279157815161277888826126f2565b975061278383612abe565b925050600181019050612764565b5085935050505092915050565b60006127a982612aa8565b6127b38185612ae9565b93506127be83612a8d565b8060005b838110156127ef5781516127d6888261270a565b97506127e183612acb565b9250506001810190506127c2565b5085935050505092915050565b600061280782612ab3565b6128118185612afa565b9350612821818560208601612b9c565b61282a81612cd3565b840191505092915050565b61283e81612b83565b82525050565b61284d81612b83565b82525050565b60006020820190506128686000830184612731565b92915050565b600060208201905081810360008301526128888184612740565b905092915050565b600060208201905081810360008301526128aa818461279e565b905092915050565b600060208201905081810360008301526128cc81846127fc565b905092915050565b600060808201905081810360008301526128ee81876127fc565b9050818103602083015261290281866127fc565b9050818103604083015261291681856127fc565b9050818103606083015261292a81846127fc565b905095945050505050565b600060a082019050818103600083015261294f81886127fc565b9050818103602083015261296381876127fc565b90506129726040830186612844565b61297f6060830185612844565b61298c6080830184612844565b9695505050505050565b60006020820190506129ab6000830184612844565b92915050565b600060e0820190506129c6600083018a612844565b6129d36020830189612731565b81810360408301526129e581886127fc565b90506129f46060830187612844565b612a016080830186612844565b612a0e60a0830185612844565b612a1b60c0830184612731565b98975050505050505050565b6000612a31612a42565b9050612a3d8282612c01565b919050565b6000604051905090565b600067ffffffffffffffff821115612a6757612a66612c90565b5b612a7082612cd3565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612b1682612b83565b9150612b2183612b83565b925082821015612b3457612b33612c32565b5b828203905092915050565b6000612b4a82612b63565b9050919050565b6000612b5c82612b63565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612bba578082015181840152602081019050612b9f565b83811115612bc9576000848401525b50505050565b60006002820490506001821680612be757607f821691505b60208210811415612bfb57612bfa612c61565b5b50919050565b612c0a82612cd3565b810181811067ffffffffffffffff82111715612c2957612c28612c90565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612ced81612b3f565b8114612cf857600080fd5b50565b612d0481612b51565b8114612d0f57600080fd5b50565b612d1b81612b83565b8114612d2657600080fd5b5056fea2646970667358221220d62f6988c58ea075ae8dc1115e9bf473364688e2c54ecf42de69b257c7bf9b5e64736f6c63430008070033"

// const deploy = async (abi, bytecode) => {
//     console.log("starting deployyyyy");
//     var deploycontract = new web3.eth.Contract(abi).deploy({
//         data: bytecode,
//         arguments: []
//     });
//     var estimatedGas = await deploycontract.estimateGas();

//     var deployedcontract = await deploycontract.send({
//         from: acc,
//         gas: estimatedGas
//     })
//     console.log("end")
//     console.log("contract addr : " + deployedcontract.options.address);
//     contract_addr = deployedcontract.options.address;
//     console.log("contract addr : " + contract_addr);
//     return deployedcontract.options.address;
// }
// (async () => {
//     // await deploy(abi, bytecode);
//     // call_contract(contract_addr);
//     // console.log("deployeddd")
// })();


var AgentContract;

function call_contract(contract_addrr) {
    AgentContract = new web3.eth.Contract(abi, contract_addrr);

    // contractInstance = AgentContract.at(contract_addrr);
    // web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    // console.log("Web3 Connected:" + window.web3.eth.defaultAccount);

    // contract_addr = contractInstance
    // console.log(contract_addr);
    // console.log("provider  : " + web3.currentProvider)
    // console.log("aaabc : " + AgentContract.methods.getBalance());

    TODO://ask for payment metamask ka

    // acc = web3.eth.selectedAddress;
    console.log("aaaaa " + acc);
    console.log("contract addr " + contract_addrr);
    // console.log()


    // // acc = acc.toLocaleLowerCase();
    // AgentContract.methods.getBalance().call(acc, { gas: 1000000 }, function (error, results) {
    //     if (!error) {
    //         console.log(results);
    //     }
    // })
    // console.log("hmm : " + AgentContract.methods.sendmoney(1121) + "  :: " + acc)
    // console.log(AgentContract.methods.sendmoney(110).call({ from: '0xBea3DbCC78b63Be254d9877CA75092C5a26c0097' }, function (error, results) {
    //     console.log("ress hehe : " + results);
    // }));
    // send_mon("0xC7EF740C497A149145BCeF4C3a0109320f28FbCe",10000000)
    return web3.currentProvider.selectedAddress;
}


function get_borower() {
    console.log("borower")
    call_contract(contract_addr);
    console.log("agent : " + AgentContract);
    console.log("acc : " + acc);
    // AgentContract.methods.get_borrower_list().call(function (error, results) {
    //     if (!error) {
    //         console.log(results);
    //         var count = 1;
    //         results.forEach(result => {
    //             get_bb(result)
    //             const b_List = document.createElement('tr');
    //             b_List.innerHTML = `
    //                     <th scope="row">${count}</th>
    //                     <td>${result}</td>
    //                     <td>Otto</td>
    //             `;

    //             document.querySelector('#borrowerLists').append(b_List);
    //             count = count + 1;
    //         })
    //     }
    //     else {
    //         console.log(results); console.log(error)
    //     }
    // });
    // call l_l
    AgentContract.methods.get_borrower_list().call(acc, { gas: 1000000 }, function (error, results) {

        if (!error) {
            // results.forEach(result => {
            //     console.log(result);
            //     if (result == acc) {
            console.log("borrowerr ress : " + results);
            get_loan_data(acc);

            results.forEach(result => {
                console.log(result);
                get_bb(result);

            });
            // }
            // get_bb(result);

            // });

        }
        else {
            // console.log("else res :" + results);
            console.log(error)
        }
    })
}

function payToBrrower() {
    console.log("lender : ",to_addresss,amt)
    var amount=amt
    var to_addresss=asa;
    console.log(AgentContract);
    // var ad="0x4e03f84f1F93bdF9CE3507A4B6BEA02cB6f1EF3b"
    console.log(to_addresss)
    AgentContract.methods.sendmoneyy(to_addresss).send({value:amount, from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("sendinngggg paisa : " + cnfno); console.log("receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);

    });
    console.log("send money!!");
}


function add_user(namee, email, pos, aadhar, pan,  phone, gender, a_incom, dependents) {
    console.log("add user : " + namee + " " + email + " " + pos + " " + aadhar + " " + pan  + " " + phone + " " + gender + " " + a_incom + " " + dependents)
    console.log(AgentContract);
    // AgentContract.methods.user(namee, email, parseInt(pos), aadhar, pan, score).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
    //     console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    // }).on('receipt', function (receipt) {
    //     // receipt example
    //     console.log(receipt);
    // })

    AgentContract.methods.user(namee, email, parseInt(pos), aadhar, pan,  parseInt(phone), gender, parseInt(a_incom), parseInt(dependents)).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
        console.log("cnf : " + cnfno); console.log("receipt : " + receipt);
    }).on('receipt', function (receipt) {
        // receipt example
        console.log(receipt);
    })
}
// bb.name,
//     bb.aadhar,
//     bb.pan,
//     bb.email,
//     bb.score,
//     bb.loan_amountt,
//     bb.l_purpose,
//     bb.a_income,
//     bb.no_of_dependents,
//     bb.phone
var asa,amt;
function get_bb(id) {

    console.log("borower name")
    // console.log(AgentContract);
    AgentContract.methods.get_borrower(id).call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            // apply_loan(results[0], results[3], results[4]);
            // console.log("re " + results);
            console.log("resssssssssssssssssss : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4] + " " + results[5] + " " + results[6] + " " + results[7] + " " + results[8] + " " + results[9] + " " + results[10] + " " + results[11]);
        
            console.log("ss",id)
            
            var count = 1;
            const b_List = document.createElement('tr');
            if (b_List) {
                b_List.innerHTML = `
                        <th scope="row">${count}</th>
                        <td>${results[0]}</td>
                        <td>${results[11]}</td>
                        <td>${results[2]}</td>
                        <td>${results[6]}</td>
                        <td>${id}</td>
                        <td><button id="paytobrrower" onclick="payToBrrower()" class="btn header-btn">Pay</a></td>
                `;
                amt=results[2];
                asa=id;
                var ss = document.querySelector('#borrowerLists');
                if (ss) { ss.append(b_List); }
                count = count + 1;
            }
        }
    })
    // get_loan_data(id);
}


function getRegisterData() {
    console.log("hmmm");
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAdd = document.getElementById('emailAdd').value;
    var aadharNo = document.getElementById('aadharNo').value;
    var pan = document.getElementById('pan').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('radio').value;
    var dependents = document.getElementById('dependents').value;
    var a_incom = document.getElementById('a_income').value;


    var user_type = JSON.parse(document.getElementById('usertype').textContent);
    var pos = 0;
    // document.getElementById('firstName').value = "";
    // document.getElementById('lastName').value = "";
    // document.getElementById('emailAdd').value = "";
    // document.getElementById('aadharNo').value = "";
    // document.getElementById('passwordNo_1').value = "";
    // document.getElementById('passwordNo_2').value = "";

    console.log("roott: " + user_type);
    if (user_type == "borrower") {
        pos = 0;
        console.log("POS:" + pos);
    }
    else { pos = 1; }
    console.log(firstName, lastName, emailAdd, pos, aadharNo, pan, 1121, phone, gender, a_incom, dependents);
    add_user(firstName + " " + lastName, emailAdd, pos, aadharNo, pan, phone, gender, a_incom, dependents);
}


function apply_loan() {
    console.log("loannnn.......*********",statuss);
    // reg_loan
   if(statuss == 1){

//    var ll_amount = document.getElementById('loan_a').value;
//    var ll_purpose = document.getElementById('purposee').value;
//    var term = document.getElementById('term').value;
//    var credit_w = document.getElementById('credit_worthiness').value;
//    var credit_s = document.getElementById('credit_score').value;
//    var roi = rateee;
   console.log("loan-------",acc, lloan_amm, lloan_type,termmm,creddit_w,creedit_scor,roiii);
//    AgentContract.methods.reg_loan(acc, lloan_amm, lloan_type,termmm,creddit_w,creedit_scor,Math.floor(roiii*100)/100).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
//     console.log("loannn : " + cnfno); console.log("loann receipt : " + receipt);
// }).on('receipt', function (receipt) {
//     // receipt example
//     console.log(receipt);
// })

AgentContract.methods.approved_loan_ids(lloan_amm, lloan_type,termmm,roiii,creedit_scor,creddit_w).send({ from: acc }).on("confirmation", function (cnfno, receipt) {
    console.log("loannn : " + cnfno); console.log("loann receipt : " + receipt);
}).on('receipt', function (receipt) {
    // receipt example
    console.log(receipt);
})





}



    // get_loan_data(acc);
}
// reg_loan


// function send_mon(to_addresss,amount){
//     var to_addresss=amount
//     console.log(to_addresss)
//     AgentContract.methods.sendmoneyy(to_addresss).send({value:amount, from: acc }).on("confirmation", function (cnfno, receipt) {
//         console.log("sendinngggg paisa : " + cnfno); console.log("receipt : " + receipt);
//     }).on('receipt', function (receipt) {
//         // receipt example
//         console.log(receipt);

//     });
//     console.log("send money!!");
// }



// function get_loan_data(addre) {

//     console.log("applyyy loannnn")
//     console.log(addre)
//     // console.log(AgentContract);
//     AgentContract.methods.get_borrower(addre).call(acc, { gas: 1000000 }, function (error, results) {
//         if (!error) {
//             // apply_loan(results[0], results[3], results[4]);
//             // console.log("re " + results);
//             console.log("aaplyyy_L : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4] + " " + results[5] + " " + results[6] + " " + results[7] + " " + results[8] + " " + results[9] + " " + results[10] + " " + results[11]);
//             try {
//                 document.getElementById("name").innerHTML = results[0];
//                 document.getElementById("email").innerHTML = results[3];
//                 document.getElementById("phone").innerHTML = results[8];
//                 document.getElementById("aadhar").innerHTML = results[1];
//                 document.getElementById("pan").innerHTML = results[2];
//                 document.getElementById("a_income").innerHTML = results[7];
//                 document.getElementById("dependents").innerHTML = results[8];
//             }
//             catch (e) { console.log("err : " + e) }
//             // document.getElementById("name").innerHTML = results[0];



//             // var count = 1;
//             // const b_List = document.createElement('tr');
//             // b_List.innerHTML = `
//             //             <th scope="row">${count}</th>
//             //             <td>${results[0]}</td>
//             //             <td>${results[9]}</td>
//             //             <td>${results[6]}</td>
//             //             <td>${results[10]}</td>
//             //     `;

//             // document.querySelector('#borrowerLists').append(b_List);
//             // count = count + 1;

//         }
//     })
// }




function get_loan_data(addre) {

    console.log("applyyy loannnn")
    console.log(addre)
    // console.log(AgentContract);
    AgentContract.methods.get_loan().call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            // apply_loan(results[0], results[3], results[4]);
            // console.log("re " + results);
            console.log("aaplyyy_L : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4] + " " + results[5] + " " + results[6] + " " + results[7] + " " + results[8] + " " + results[9] + " " + results[10] + " " + results[11]);
            try {
                document.getElementById("name").innerHTML = results[0];
                document.getElementById("email").innerHTML = results[3];
                document.getElementById("phone").innerHTML = results[8];
                document.getElementById("aadhar").innerHTML = results[1];
                document.getElementById("pan").innerHTML = results[2];
                document.getElementById("a_income").innerHTML = results[7];
                document.getElementById("dependents").innerHTML = results[8];
            }
            catch (e) { console.log("err : " + e) }
            // document.getElementById("name").innerHTML = results[0];



            // var count = 1;
            // const b_List = document.createElement('tr');
            // b_List.innerHTML = `
            //             <th scope="row">${count}</th>
            //             <td>${results[0]}</td>
            //             <td>${results[9]}</td>
            //             <td>${results[6]}</td>
            //             <td>${results[10]}</td>
            //     `;

            // document.querySelector('#borrowerLists').append(b_List);
            // count = count + 1;

        }
    })
}






// function payToBrrower(walletAdd)
// {
//     console.log("wallet Address", walletAdd)
//     console.log("pay to brrower")
// }

// TODO:infura/quicknode
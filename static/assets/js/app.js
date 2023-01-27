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
// 0x1623388Bda883e7Ef661e76eedDf1183F79cd65f
var contract_addr = "0x7eccC24A5000c64C96994F759b033bDA5c9bBE3F"
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





var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"lo_amount","type":"uint256"},{"internalType":"uint256","name":"lo_purpose","type":"uint256"},{"internalType":"uint256","name":"termmm","type":"uint256"},{"internalType":"string","name":"roiii","type":"string"},{"internalType":"uint256","name":"creditscore","type":"uint256"},{"internalType":"uint256","name":"creditworthiness","type":"uint256"}],"name":"approved_loan_ids","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"b_num","type":"uint256"}],"name":"sendmoneyy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"phone","type":"uint256"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"uint256","name":"a_income","type":"uint256"},{"internalType":"uint256","name":"no_of_depeden","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"approved_loans","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"b_num","type":"uint256"}],"name":"get_loann","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"loans","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

// var abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"borower_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_borrower","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_borrower_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"get_lender","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_lender_list","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lender_list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"paisaa","type":"uint256"}],"name":"sendmoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"uint256","name":"pos","type":"uint256"},{"internalType":"string","name":"aadhar","type":"string"},{"internalType":"string","name":"pan","type":"string"},{"internalType":"uint256","name":"score","type":"uint256"}],"name":"user","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]');
var bytecode = "608060405234801561001057600080fd5b506126c8806100206000396000f3fe6080604052600436106100c25760003560e01c8063939711271161007f578063d038487111610059578063d0384871146102b8578063d08e7279146102f5578063d7033d6814610320578063e1ec3c681461035d576100c2565b80639397112714610212578063b1f07cfd1461023b578063cf3a5a1c14610278576100c2565b80630fa9b165146100c75780633f8ee26b1461010a5780634e94b75d1461013557806361f46c221461017a5780636d4ce63c146101aa57806387eea5fc146101d5575b600080fd5b3480156100d357600080fd5b506100ee60048036038101906100e99190611aa8565b61039a565b6040516101019796959493929190611bb5565b60405180910390f35b34801561011657600080fd5b5061011f61052a565b60405161012c9190611ce9565b60405180910390f35b34801561014157600080fd5b5061015c60048036038101906101579190611d37565b6105b8565b60405161017199989796959493929190611e22565b60405180910390f35b610194600480360381019061018f9190611f02565b610b0f565b6040516101a19190611f42565b60405180910390f35b3480156101b657600080fd5b506101bf610c14565b6040516101cc9190611f5d565b60405180910390f35b3480156101e157600080fd5b506101fc60048036038101906101f79190611aa8565b610cac565b6040516102099190611f7f565b60405180910390f35b34801561021e57600080fd5b50610239600480360381019061023491906120cf565b610ceb565b005b34801561024757600080fd5b50610262600480360381019061025d9190611aa8565b611069565b60405161026f9190611f7f565b60405180910390f35b34801561028457600080fd5b5061029f600480360381019061029a9190611d37565b6110a8565b6040516102af9493929190612178565b60405180910390f35b3480156102c457600080fd5b506102df60048036038101906102da9190611aa8565b6113f5565b6040516102ec9190611f7f565b60405180910390f35b34801561030157600080fd5b5061030a611434565b6040516103179190611ce9565b60405180910390f35b34801561032c57600080fd5b50610347600480360381019061034291906121d9565b6114c2565b604051610354919061232f565b60405180910390f35b34801561036957600080fd5b50610384600480360381019061037f9190611aa8565b6118b7565b6040516103919190611f42565b60405180910390f35b60008060606000806000806005600089815260200190815260200160002060000154600560008a815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600560008b8152602001908152602001600020600201600560008c815260200190815260200160002060030154600560008d815260200190815260200160002060040154600560008e815260200190815260200160002060050154600560008f815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684805461049190612380565b80601f01602080910402602001604051908101604052809291908181526020018280546104bd90612380565b801561050a5780601f106104df5761010080835404028352916020019161050a565b820191906000526020600020905b8154815290600101906020018083116104ed57829003601f168201915b505050505094509650965096509650965096509650919395979092949650565b606060018054806020026020016040519081016040528092919081815260200182805480156105ae57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610564575b5050505050905090565b60608060008060008060008060606000600460008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806101c001604052908160008201805461062390612380565b80601f016020809104026020016040519081016040528092919081815260200182805461064f90612380565b801561069c5780601f106106715761010080835404028352916020019161069c565b820191906000526020600020905b81548152906001019060200180831161067f57829003601f168201915b505050505081526020016001820180546106b590612380565b80601f01602080910402602001604051908101604052809291908181526020018280546106e190612380565b801561072e5780601f106107035761010080835404028352916020019161072e565b820191906000526020600020905b81548152906001019060200180831161071157829003601f168201915b50505050508152602001600282018054806020026020016040519081016040528092919081815260200182805480156107bc57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610772575b505050505081526020016003820180546107d590612380565b80601f016020809104026020016040519081016040528092919081815260200182805461080190612380565b801561084e5780601f106108235761010080835404028352916020019161084e565b820191906000526020600020905b81548152906001019060200180831161083157829003601f168201915b5050505050815260200160048201805461086790612380565b80601f016020809104026020016040519081016040528092919081815260200182805461089390612380565b80156108e05780601f106108b5576101008083540402835291602001916108e0565b820191906000526020600020905b8154815290600101906020018083116108c357829003601f168201915b505050505081526020016005820154815260200160068201805461090390612380565b80601f016020809104026020016040519081016040528092919081815260200182805461092f90612380565b801561097c5780601f106109515761010080835404028352916020019161097c565b820191906000526020600020905b81548152906001019060200180831161095f57829003601f168201915b505050505081526020016007820154815260200160088201548152602001600982018054806020026020016040519081016040528092919081815260200182805480156109e857602002820191906000526020600020905b8154815260200190600101908083116109d4575b50505050508152602001600a8201548152602001600b8201548152602001600c8201548152602001600d820160405180604001604052908160008201805480602002602001604051908101604052809291908181526020018280548015610aa457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a5a575b50505050508152602001600182015481525050815250509050806000015181606001518260e001518361010001518460a00151856101400151866101600151876101800151886101200151995099509950995099509950995099509950509193959799909294969850565b600060056000838152602001908152602001600020600701339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346005600084815260200190815260200160002060030154610baa91906123e0565b60056000848152602001908152602001600020600301819055508273ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610c0a573d6000803e3d6000fd5b5034905092915050565b6060600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600901805480602002602001604051908101604052809291908181526020018280548015610ca257602002820191906000526020600020905b815481526020019060010190808311610c8e575b5050505050905090565b60038181548110610cbc57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003390506000439050876005600083815260200190815260200160002060030181905550816005600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600560008381526020019081526020016000206002019081610d8891906125c0565b5080600560008381526020019081526020016000206000018190555087600560008381526020019081526020016000206003018190555086600560008381526020019081526020016000206004018190555085600560008381526020019081526020016000206005018190555082600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600c018190555083600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b0181905550806005600083815260200190815260200160002060000181905550816005600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600560008381526020019081526020016000206002019081610f1691906125c0565b5087600560008381526020019081526020016000206003018190555086600560008381526020019081526020016000206004018190555085600560008381526020019081526020016000206005018190555082600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600c018190555083600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b0181905550600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206009018190806001815401808255809150506001900390600052602060002001600090919091909150555050505050505050565b6001818154811061107957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606080606080600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018380546111c290612380565b80601f01602080910402602001604051908101604052809291908181526020018280546111ee90612380565b801561123b5780601f106112105761010080835404028352916020019161123b565b820191906000526020600020905b81548152906001019060200180831161121e57829003601f168201915b5050505050935082805461124e90612380565b80601f016020809104026020016040519081016040528092919081815260200182805461127a90612380565b80156112c75780601f1061129c576101008083540402835291602001916112c7565b820191906000526020600020905b8154815290600101906020018083116112aa57829003601f168201915b505050505092508180546112da90612380565b80601f016020809104026020016040519081016040528092919081815260200182805461130690612380565b80156113535780601f1061132857610100808354040283529160200191611353565b820191906000526020600020905b81548152906001019060200180831161133657829003601f168201915b5050505050915080805461136690612380565b80601f016020809104026020016040519081016040528092919081815260200182805461139290612380565b80156113df5780601f106113b4576101008083540402835291602001916113df565b820191906000526020600020905b8154815290600101906020018083116113c257829003601f168201915b5050505050905093509350935093509193509193565b6002818154811061140557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060028054806020026020016040519081016040528092919081815260200182805480156114b857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161146e575b5050505050905090565b60606000339050600089036116f1576114d96118db565b8b81600001819052508881606001819052508a8160200181905250878160800181905250868160a0018181525050858160c00181905250848160e0018181525050838161010001818152505080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001908161157a91906125c0565b50602082015181600101908161159091906125c0565b5060408201518160020190805190602001906115ad929190611950565b5060608201518160030190816115c391906125c0565b5060808201518160040190816115d991906125c0565b5060a0820151816005015560c08201518160060190816115f991906125c0565b5060e08201518160070155610100820151816008015561012082015181600901908051906020019061162c9291906119da565b5061014082015181600a015561016082015181600b015561018082015181600c01556101a082015181600d016000820151816000019080519060200190611674929190611950565b506020820151816001015550509050506001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508b925050506118aa565b600189036118a5578a600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001908161174891906125c0565b5087600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101908161179891906125c0565b5086600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030190816117e891906125c0565b5089600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401908161183891906125c0565b506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508a9150506118aa565b600080fd5b9998505050505050505050565b600081815481106118c757600080fd5b906000526020600020016000915090505481565b604051806101c001604052806060815260200160608152602001606081526020016060815260200160608152602001600081526020016060815260200160008152602001600081526020016060815260200160008152602001600081526020016000815260200161194a611a27565b81525090565b8280548282559060005260206000209081019282156119c9579160200282015b828111156119c85782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611970565b5b5090506119d69190611a41565b5090565b828054828255906000526020600020908101928215611a16579160200282015b82811115611a155782518255916020019190600101906119fa565b5b509050611a239190611a41565b5090565b604051806040016040528060608152602001600081525090565b5b80821115611a5a576000816000905550600101611a42565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611a8581611a72565b8114611a9057600080fd5b50565b600081359050611aa281611a7c565b92915050565b600060208284031215611abe57611abd611a68565b5b6000611acc84828501611a93565b91505092915050565b611ade81611a72565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b0f82611ae4565b9050919050565b611b1f81611b04565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b5f578082015181840152602081019050611b44565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b8782611b25565b611b918185611b30565b9350611ba1818560208601611b41565b611baa81611b6b565b840191505092915050565b600060e082019050611bca600083018a611ad5565b611bd76020830189611b16565b8181036040830152611be98188611b7c565b9050611bf86060830187611ad5565b611c056080830186611ad5565b611c1260a0830185611ad5565b611c1f60c0830184611b16565b98975050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c6081611b04565b82525050565b6000611c728383611c57565b60208301905092915050565b6000602082019050919050565b6000611c9682611c2b565b611ca08185611c36565b9350611cab83611c47565b8060005b83811015611cdc578151611cc38882611c66565b9750611cce83611c7e565b925050600181019050611caf565b5085935050505092915050565b60006020820190508181036000830152611d038184611c8b565b905092915050565b611d1481611b04565b8114611d1f57600080fd5b50565b600081359050611d3181611d0b565b92915050565b600060208284031215611d4d57611d4c611a68565b5b6000611d5b84828501611d22565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d9981611a72565b82525050565b6000611dab8383611d90565b60208301905092915050565b6000602082019050919050565b6000611dcf82611d64565b611dd98185611d6f565b9350611de483611d80565b8060005b83811015611e15578151611dfc8882611d9f565b9750611e0783611db7565b925050600181019050611de8565b5085935050505092915050565b6000610120820190508181036000830152611e3d818c611b7c565b90508181036020830152611e51818b611b7c565b9050611e60604083018a611ad5565b611e6d6060830189611ad5565b611e7a6080830188611ad5565b611e8760a0830187611ad5565b611e9460c0830186611ad5565b611ea160e0830185611ad5565b818103610100830152611eb48184611dc4565b90509a9950505050505050505050565b6000611ecf82611ae4565b9050919050565b611edf81611ec4565b8114611eea57600080fd5b50565b600081359050611efc81611ed6565b92915050565b60008060408385031215611f1957611f18611a68565b5b6000611f2785828601611eed565b9250506020611f3885828601611a93565b9150509250929050565b6000602082019050611f576000830184611ad5565b92915050565b60006020820190508181036000830152611f778184611dc4565b905092915050565b6000602082019050611f946000830184611b16565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611fdc82611b6b565b810181811067ffffffffffffffff82111715611ffb57611ffa611fa4565b5b80604052505050565b600061200e611a5e565b905061201a8282611fd3565b919050565b600067ffffffffffffffff82111561203a57612039611fa4565b5b61204382611b6b565b9050602081019050919050565b82818337600083830152505050565b600061207261206d8461201f565b612004565b90508281526020810184848401111561208e5761208d611f9f565b5b612099848285612050565b509392505050565b600082601f8301126120b6576120b5611f9a565b5b81356120c684826020860161205f565b91505092915050565b60008060008060008060c087890312156120ec576120eb611a68565b5b60006120fa89828a01611a93565b965050602061210b89828a01611a93565b955050604061211c89828a01611a93565b945050606087013567ffffffffffffffff81111561213d5761213c611a6d565b5b61214989828a016120a1565b935050608061215a89828a01611a93565b92505060a061216b89828a01611a93565b9150509295509295509295565b600060808201905081810360008301526121928187611b7c565b905081810360208301526121a68186611b7c565b905081810360408301526121ba8185611b7c565b905081810360608301526121ce8184611b7c565b905095945050505050565b60008060008060008060008060006101208a8c0312156121fc576121fb611a68565b5b60008a013567ffffffffffffffff81111561221a57612219611a6d565b5b6122268c828d016120a1565b99505060208a013567ffffffffffffffff81111561224757612246611a6d565b5b6122538c828d016120a1565b98505060406122648c828d01611a93565b97505060608a013567ffffffffffffffff81111561228557612284611a6d565b5b6122918c828d016120a1565b96505060808a013567ffffffffffffffff8111156122b2576122b1611a6d565b5b6122be8c828d016120a1565b95505060a06122cf8c828d01611a93565b94505060c08a013567ffffffffffffffff8111156122f0576122ef611a6d565b5b6122fc8c828d016120a1565b93505060e061230d8c828d01611a93565b92505061010061231f8c828d01611a93565b9150509295985092959850929598565b600060208201905081810360008301526123498184611b7c565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061239857607f821691505b6020821081036123ab576123aa612351565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123eb82611a72565b91506123f683611a72565b925082820390508181111561240e5761240d6123b1565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026124767fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612439565b6124808683612439565b95508019841693508086168417925050509392505050565b6000819050919050565b60006124bd6124b86124b384611a72565b612498565b611a72565b9050919050565b6000819050919050565b6124d7836124a2565b6124eb6124e3826124c4565b848454612446565b825550505050565b600090565b6125006124f3565b61250b8184846124ce565b505050565b5b8181101561252f576125246000826124f8565b600181019050612511565b5050565b601f8211156125745761254581612414565b61254e84612429565b8101602085101561255d578190505b61257161256985612429565b830182612510565b50505b505050565b600082821c905092915050565b600061259760001984600802612579565b1980831691505092915050565b60006125b08383612586565b9150826002028217905092915050565b6125c982611b25565b67ffffffffffffffff8111156125e2576125e1611fa4565b5b6125ec8254612380565b6125f7828285612533565b600060209050601f83116001811461262a5760008415612618578287015190505b61262285826125a4565b86555061268a565b601f19841661263886612414565b60005b828110156126605784890151825560018201915060208501945060208101905061263b565b8683101561267d5784890151612679601f891682612586565b8355505b6001600288020188555050505b50505050505056fea26469706673582212205829b3fc370c788775a446c12839775aaab7bbe9e34e12cbd09f0d079199fa9b64736f6c63430008110033"

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
            console.log("borrowerrr ::  " + results);
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




function get_loann(b_num) {
    console.log("getting loan data : ")
    // var amount=amt
    // var to_addresss=asa;
    console.log(AgentContract);
    // var ad="0x4e03f84f1F93bdF9CE3507A4B6BEA02cB6f1EF3b"
    console.log(to_addresss)
    AgentContract.methods.get_loann(b_num).call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            // apply_loan(results[0], results[3], results[4]);
            console.log("loan data :::: " + results);
            console.log("loann data : " + results[0] + " " + results[1] + " " + results[2] + " " + results[3] + " " + results[4] + " " + results[5] + " " + results[6] + " " + results[7] + " " + results[8] + " " + results[9] + " " + results[10] + " " + results[11]);
            // try {
            //     document.getElementById("name").innerHTML = results[0];
            //     document.getElementById("email").innerHTML = results[3];
            //     document.getElementById("phone").innerHTML = results[8];
            //     document.getElementById("aadhar").innerHTML = results[1];
            //     document.getElementById("pan").innerHTML = results[2];
            //     document.getElementById("a_income").innerHTML = results[7];
            //     document.getElementById("dependents").innerHTML = results[8];
            // }
            // catch (e) { console.log("err : " + e) }
      }
    })
    console.log("send money!!");
}













// function payToBrrower(walletAdd)
// {
//     console.log("wallet Address", walletAdd)
//     console.log("pay to brrower")
// }

// TODO:infura/quicknode

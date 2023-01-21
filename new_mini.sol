// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.1 <=0.9.0;

contract mini {
    
    struct borower {
        // uint256 score;
        string name;
        string email;
        address[] borrower_list;
        string aadhar;
        string pan;
        uint256 phone;
        string gender;
        uint256 a_income;
        uint256 no_of_dependents;
        // uint256 loan_amountt;
        // string l_purpose;
        uint256 received_ammount;
        // uint256 roi;
        uint256 creditscore;
        uint256 creditworthiness;
        // uint256 term;
    }

    struct lender {
        string name;
        string aadhar;
        address[] lender_list;
        string pan;
        string email;
    }

    struct app_loans{
        uint256 loan_id;
        address borrower_ac_address;
        var roii;
        uint256 loan_amountt;
        string l_purpose;
        uint256 term;
        address lender_acc;
    }


    address[] loans;
    address[] public borower_list;
    address[] public lender_list;
    address[] public approved_loans;

    mapping(address => borower) borowerInfo;
    mapping(address => lender) lenderInfo;
    // uint256 PAISA = 10 * 1e10;
    uint256 aa = 1;

function user(
        string memory name,
        string memory email,
        uint256 pos,
        string memory aadhar,
        string memory pan,
        // uint256 score,
        uint256 phone,
        string memory gender,
        uint256 a_income,
        uint256 no_of_depeden
    ) public returns (string memory) {
        address addr = msg.sender;
        if (pos == 0) {
            borower memory b;
            b.name = name;
            b.aadhar = aadhar;
            b.email = email;
            b.pan = pan;
            // b.score = score;
            b.phone = phone;
            b.gender = gender;
            b.a_income = a_income;
            b.no_of_dependents = no_of_depeden;
            // b.loan_amountt = 0;
            // b.l_purpose = "";
            b.received_ammount=0;
            // b.roi=0;
            borowerInfo[msg.sender] = b;
            // b.received_ammount=0;
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
    function sendmoneyy(address payable to)
        public
        payable
        returns (uint256)
    {
        borowerInfo[to].received_ammount=msg.value;
        to.transfer(msg.value);
        return msg.value;
    }



    function getBalance() public view returns (uint256, uint256) {
        return (aa, block.timestamp);
    }

    function l_l() public view returns (address[] memory) {
        return loans;
    }

    function get_borrower(address addr)
        public
        view
        returns (
            string memory,string memory,
            // uint256,
            // string memory,
            uint256,uint256,uint256,uint256,
            // uint256,
            // uint256,
            uint256,uint256
        )
    {
        borower memory bb = borowerInfo[addr];
        return (
            bb.name,
            bb.aadhar,
            // bb.loan_amountt,
            // bb.l_purpose,
           bb.a_income,
           bb.no_of_dependents,
           bb.phone,
           bb.received_ammount,
        //    bb.roi,
           bb.creditworthiness,
           bb.creditscore,
        //    bb.term
        );
    }
    function get_approvedLoans() public view returns(address[] memory){
        return approved_loans;
    }
    function add_approved_loan(address a)public {
        approved_loans.push(a);
    }

    function add_loan(hash id,address adr,var roii,uint256 loan_amountt,uint256 ll_purpose,uint term,address ll_account)public {
      app_loan memory a;
         a.loan_id=id;
        a.borrower_ac_address=addr;
        a.roii=roii;
        a.loan_amountt=loan_amountt;
        a.l_purpose=ll_purpose;
        a.term-term;
        a.lender_acc=ll_account;
    }

    function get_loan_details(hash id)public returns(){
        app_loans.loan_id;
        app_loans.borrower_ac_address=addr;
        app_loans.roii=roii;
        app_loans.loan_amountt=loan_amountt;
        app_loans.l_purpose=ll_purpose;
        app_loans.term-term;
        app_loans.lender_acc=ll_account;

    }



    function loan_data(address addr)
        public
        view
        returns (
            string memory,
            uint256,
            uint256 ,uint256,uint256,uint256,uint256
        )
    {
        return (
            borowerInfo[addr].l_purpose,
            borowerInfo[addr].loan_amountt,
            borowerInfo[addr].received_ammount,
            borowerInfo[addr].roi,
            borowerInfo[addr].creditscore,
            borowerInfo[addr].creditworthiness,
            borowerInfo[addr].term
            
            
        );
    }

    function get_lender(address addr)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            lenderInfo[addr].name,
            lenderInfo[addr].email,
            lenderInfo[addr].pan,
            lenderInfo[addr].aadhar
        );
    }

    function get_borrower_list() public view returns (address[] memory) {
        return borower_list;
    }

    function get_lender_list() public view returns (address[] memory) {
        return lender_list;
    }

    function reg_loan(
        address acc_address,
        uint256 l_amount,
        string memory purpose,uint term,uint creditworthiness,uint creditscore,uint256 roi
    ) public {
        borowerInfo[acc_address].loan_amountt = l_amount;
        borowerInfo[acc_address].l_purpose = purpose;
        borowerInfo[acc_address].received_ammount=0;
        borowerInfo[acc_address].roi=roi;
        borowerInfo[acc_address].term=term;
        borowerInfo[acc_address].creditworthiness=creditworthiness;
        borowerInfo[acc_address].creditscore=creditscore;
        
        loans.push(acc_address);
       }  



       
    }

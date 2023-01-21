document.addEventListener('DOMContentLoaded', function() {
    get_borower();
});

function get_borower() {
    console.log("borower")
    console.log(AgentContract);
    AgentContract.methods.get_borrower_list().call(acc, { gas: 1000000 }, function (error, results) {
        if (!error) {
            console.log(results);
        }
    })
}

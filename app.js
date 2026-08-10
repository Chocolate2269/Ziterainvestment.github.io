// ZITERA CONTROL PANEL 998 - APP.JS

// 1. CREDIT USER BALANCE
function creditUser() {
    let email = document.getElementById('email').value;
    let amount = document.getElementById('amount').value;

    if(email === "" || amount === "") {
        alert("Please enter Email and Amount");
        return;
    }
    alert("✅ Credited $" + amount + " to " + email);
    document.getElementById('email').value = "";
    document.getElementById('amount').value = "";
}

// 2. APPROVE WITHDRAWAL
function approveWithdrawal(btn) {
    let row = btn.parentElement.parentElement;
    alert("✅ Withdrawal Approved for " + row.cells[0].innerText);
    row.remove(); // removes from table after approving
}

// 3. REJECT WITHDRAWAL
function rejectWithdrawal(btn) {
    let row = btn.parentElement.parentElement;
    alert("❌ Withdrawal Rejected for " + row.cells[0].innerText);
    row.remove();
}

// 4. APPROVE DEPOSIT
function approveDeposit(btn) {
    let row = btn.parentElement.parentElement;
    alert("✅ Deposit Approved for " + row.cells[0].innerText + " - " + row.cells[1].innerText);
    row.remove();
}

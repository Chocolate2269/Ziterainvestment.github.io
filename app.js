// ZITERA CONTROL PANEL 998

function creditUser() {
    let email = document.getElementById('email').value;
    let amount = parseFloat(document.getElementById('amount').value);
    if(email === "" || amount === "" || amount <= 0) {
        alert("Please enter Email and Amount");
        return;
    }

    // Save balance for that email
    localStorage.setItem('balance_' + email, amount);

    alert("✅ Credited $" + amount + " to " + email);
    document.getElementById('email').value = "";
    document.getElementById('amount').value = "";
}

function approveWithdrawal(btn) {
    let row = btn.parentElement.parentElement;
    alert("✅ Withdrawal Approved for " + row.cells[0].innerText);
    row.remove();
}

function rejectWithdrawal(btn) {
    let row = btn.parentElement.parentElement;
    alert("❌ Withdrawal Rejected for " + row.cells[0].innerText);
    row.remove();
}

function approveDeposit(btn) {
    let row = btn.parentElement.parentElement;
    alert("✅ Deposit Approved for " + row.cells[0].innerText);
    row.remove();
}

// Header elements
const titleEl = document.getElementById('title-el');
const incomeAmountEl = document.getElementById('income-amount');
const expenseAmountEl = document.getElementById('expense-amount');
const balanceAmountEl = document.getElementById('balance-amount');

// Form inputs
const transactionDescInput = document.getElementById('transaction-desc');
const transactionAmtInput = document.getElementById('transaction-amt');
const transactionTypeSelect = document.getElementById('type');

// Button
const saveBtn = document.getElementById('save-btn');

// Transaction list
const transactionList = document.getElementById('transaction-list');

// Optional: Form container (if needed for event delegation or styling)
const transactionForm = document.querySelector('.transaction-form');


let allTransactions = []

saveTransaction.addEventListener("submit", function () {
    event.preventDefault(); 
    const transactionDescription = document.getElementById("transaction-desc").value
    const transactionAmount = document.getElementById("transaction-amt").value
})

function renderdata(args) {
    
}
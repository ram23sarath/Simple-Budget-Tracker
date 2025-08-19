// Header elements
const titleEl = document.getElementById('title-el');
const incomeAmountEl = document.getElementById('income-amount');
const expenseAmountEl = document.getElementById('expense-amount');
const balanceAmountEl = document.getElementById('balance-amount');

// Form inputs

const transactionTypeSelect = document.getElementById('type');

// Button
const saveBtn = document.getElementById('save-btn');

// Transaction list
const transactionList = document.getElementById('transaction-list');


let allTransactions = []

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const transactionDescInput = document.getElementById('transaction-desc');
    const transactionAmtInput = document.getElementById('transaction-amt'); 
    const transactionType = transactionTypeSelect.value;
    const transactionDesc = transactionDescInput.value;
    transactionDescInput.value = '';
    const transactionAmt = parseFloat(transactionAmtInput.value);
    transactionAmtInput.value = '';
    if (transactionDesc && !isNaN(transactionAmt)) {
        const transaction = {
            desc: transactionDesc,
            amt: transactionAmt,
            type: transactionType
        };
        allTransactions.push(transaction);
        renderdata(allTransactions);
    } else {
        alert("Please enter a valid description and amount.");
    }
    transactionDescInput.focus();

});

function updateUI() {
    let totalIncome = 0;
    let totalExpenses = 0;
    let balance = 0;

    allTransactions.forEach((transaction) => {
        if (transaction.type === "income") {
            totalIncome += transaction.amt;
        } else {
            totalExpenses += transaction.amt;
        }
    });

    balance = totalIncome - totalExpenses;

    incomeAmountEl.textContent = totalIncome.toFixed(2);
    expenseAmountEl.textContent = totalExpenses.toFixed(2);
    balanceAmountEl.textContent = balance.toFixed(2);

    transactionList.innerHTML = '';

    allTransactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.desc} - ${transaction.amt.toFixed(2)} (${transaction.type})`;
        transactionList.appendChild(listItem);
    });
}
//Ensure updateUI() is called every time a new transaction is added (inside the form event handler).







function renderdata(args) {
    
}
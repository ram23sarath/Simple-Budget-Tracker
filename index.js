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
    
}


function renderdata(args) {
    
}
function getValueById(inputId) {
    const inputField = document.getElementById(inputId);

    if (inputField.value == '') {
        alert('Please Provide Input');
        return;
    }
    else if (isNaN(inputField.value) == true) {
        alert('Please Provide Number');
        return;
    }
    else if (inputField.value <= 0) {
        alert('Please Provide Positive Number');
        return;
    }

    else {
        const inputValue = parseFloat(inputField.value);
        return inputValue;
    }
}

function getInnerTextById(inputId) {
    const textField = document.getElementById(inputId);
    const text = textField.innerText;
    return text;

}

function setElementsById(inputId, value) {
    const elementField = document.getElementById(inputId);
    elementField.innerText = value;

}

function getExpensesTotal() {
    const food = parseFloat(getValueById('food-field'));
    const rent = parseFloat(getValueById('rent-field'));
    const clothes = parseFloat(getValueById('clothes-field'));

    const totalExpenses = food + rent + clothes;
    return totalExpenses;
}


function calculatePercentage() {
    const balance = parseFloat(getInnerTextById('balance'));
    const percentage = parseFloat(getValueById('save-field'));
    if (percentage <= 100) {
        const percentageAmount = (balance * percentage) / 100;
        return percentageAmount;
    }
    else
        alert('Percantage can not be more than 100');
}

function calculateRemaining() {
    const balance = parseFloat(getInnerTextById('balance'));
    const saveAmount = parseFloat(getInnerTextById('save-amount'));
    if (balance >= saveAmount) {
        const remainingBalance = balance - saveAmount;
        return remainingBalance;
    }
    else
        alert('Balance is Less Than Savings');
}
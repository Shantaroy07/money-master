document.getElementById('calc-btn').addEventListener('click', function () {
    const income = parseFloat(getValueById('income-field'));
    const expenses = parseFloat(getExpensesTotal());


    if (income >= expenses) {
        setElementsById('total-expenses', expenses.toFixed(2));
        const balance = parseFloat(income - expenses).toFixed(2);
        setElementsById('balance', balance);
    }

    else {
        alert('Expenses are more than Income');
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveAmount = parseFloat(calculatePercentage());
    setElementsById('save-amount', saveAmount.toFixed(2));

    const remainingBalance = parseFloat(calculateRemaining());
    setElementsById('remaining-balance', remainingBalance.toFixed(2));

})
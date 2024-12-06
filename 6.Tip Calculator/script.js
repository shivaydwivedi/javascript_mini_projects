document.getElementById('calculate-btn').addEventListener('click', () => {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const result = document.getElementById('result');

    if (isNaN(billAmount) || billAmount <= 0) {
        result.textContent = 'Please enter a valid bill amount.';
        return;
    }

    if (isNaN(tipPercentage) || tipPercentage < 0) {
        result.textContent = 'Please enter a valid tip percentage.';
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    result.textContent = `Tip Amount: $${tipAmount.toFixed(2)}, Total Amount: $${totalAmount.toFixed(2)}`;
});

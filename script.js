function getInputValue(isIncrease, id) {
    const input = document.getElementById(id);
    const inputNumber = parseInt(input.value);
    let newInputNumber = 0
    if (isIncrease == true) {
        newInputNumber = inputNumber + 1;

    }
    if (isIncrease == false && inputNumber > 0) {
        newInputNumber = inputNumber - 1;

    }
    input.value = newInputNumber;
    getTotalValue();


}

function getTotalValue() {
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);

    const totalValue = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText = totalValue;
    const vatTotal = totalValue * 10 / 100;
    document.getElementById('vat-total').innerText = vatTotal;
    const grandTotal = totalValue + vatTotal;
    document.getElementById('grand-total').innerText = grandTotal;


}
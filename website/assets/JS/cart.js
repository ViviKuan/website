function add(btn) {
    let countInput = btn.parentElement.querySelector('.itemcount');
    let currentValue = parseInt(countInput.value);
    countInput.value = currentValue + 1;
}

function reduce(btn) {
    let countInput = btn.parentElement.querySelector('.itemcount');
    let currentValue = parseInt(countInput.value);
    if (currentValue > 1) {
        countInput.value = currentValue - 1;
    }
}

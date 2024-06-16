function add() {
    let countInput = document.getElementById('count');
    let currentValue = parseInt(countInput.value);
    countInput.value = currentValue + 1;
}

function reduce() {
    let countInput = document.getElementById('count');
    let currentValue = parseInt(countInput.value);
    if (currentValue > 1) {
        countInput.value = currentValue - 1;
    }
}

document.getElementById('addtoshoppingcart').addEventListener('click', function() {
    let countInput = document.getElementById('count');
    let message = '已成功加入購物車，數量: ' + countInput.value;
    window.alert(message);
});


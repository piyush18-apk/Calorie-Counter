document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const keys = document.querySelectorAll('.key');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (key.id === 'clear') {
                currentInput = '';
                operator = '';
                previousInput = '';
                screen.textContent = '0';
            } else if (key.id === 'equal') {
                if (currentInput && previousInput) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                    screen.textContent = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else if (key.classList.contains('operator')) {
                if (currentInput) {
                    operator = key.value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += key.value;
                screen.textContent = currentInput;
            }
        });
    });
});

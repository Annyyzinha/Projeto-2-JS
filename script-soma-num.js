document.addEventListener('DOMContentLoaded', () => {
    window.calculateSum = function() {
        const numbersInput = document.getElementById('numbersInput').value;
        const resultSumDisplay = document.getElementById('resultSum');
        let sum = 0;

        const numbersArray = numbersInput.split(',').map(num => num.trim());

        let allNumbersValid = true;
        for (let i = 0; i < numbersArray.length; i++) {
            const num = parseFloat(numbersArray[i]);
            if (isNaN(num)) {
                allNumbersValid = false;
                resultSumDisplay.textContent = 'Erro: Por favor, insira apenas números válidos separados por vírgula.';
                break;
            }
            sum += num;
        }

        if (allNumbersValid) {
            resultSumDisplay.textContent = `A soma dos números é: ${sum}`;
        }
    };
});
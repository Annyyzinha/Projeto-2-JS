document.addEventListener('DOMContentLoaded', () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const guessInput = document.getElementById('guessInput');
    const messageDisplay = document.getElementById('message');

    window.checkGuess = function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            messageDisplay.textContent = 'Por favor, digite um número válido entre 1 e 100.';
        } else if (userGuess === secretNumber) {
            messageDisplay.textContent = `Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativas!`;
            guessInput.disabled = true;
        } else if (userGuess < secretNumber) {
            messageDisplay.textContent = 'Tente um número maior.';
        } else {
            messageDisplay.textContent = 'Tente um número menor.';
        }
        guessInput.value = '';
        guessInput.focus();
    };

    console.log('Número secreto (para fins de teste):', secretNumber);
});
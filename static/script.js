document.addEventListener('DOMContentLoaded', function() {
    const wordContainer = document.getElementById('word');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const attemptsLeft = document.getElementById('attempts-left');

    let word = 'hangman';
    let guessedLetters = [];
    let attempts = 6;

    function updateWordDisplay() {
        let displayWord = '';
        for (let i = 0; i < word.length; i++) {
            if (guessedLetters.includes(word[i])) {
                displayWord += word[i];
            } else {
                displayWord += '_';
            }
        }
        wordContainer.textContent = displayWord;
    }

    function updateAttemptsDisplay() {
        attemptsLeft.textContent = attempts;
    }

    function checkWin() {
        if (!wordContainer.textContent.includes('_')) {
            alert('Congratulations! You won!');
        }
    }

    function checkLoss() {
        if (attempts === 0) {
            alert('Game over! You lost.');
        }
    }

    guessButton.addEventListener('click', function() {
        const guess = guessInput.value.toLowerCase();
        if (guessedLetters.includes(guess)) {
            alert('You already guessed that letter.');
        } else {
            guessedLetters.push(guess);
            if (!word.includes(guess)) {
                attempts--;
            }
            updateWordDisplay();
            updateAttemptsDisplay();
            checkWin();
            checkLoss();
        }
        guessInput.value = '';
    });

    updateWordDisplay();
    updateAttemptsDisplay();
});

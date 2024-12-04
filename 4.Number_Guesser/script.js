let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value, 10);
    const feedback = document.getElementById('feedback');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `🎉 Correct! The number was ${randomNumber}. It took you ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        feedback.textContent = '📉 Too low! Try again.';
    } else {
        feedback.textContent = '📈 Too high! Try again.';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess-input').value = '';
    document.getElementById('feedback').textContent = '';
}

document.getElementById('guess-btn').addEventListener('click', checkGuess);
document.getElementById('reset-btn').addEventListener('click', resetGame);

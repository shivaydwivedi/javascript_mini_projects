let timer;
let remainingTime = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startCountdown() {
    const input = document.getElementById('time-input');
    const display = document.getElementById('display');
    const seconds = parseInt(input.value, 10);

    if (isNaN(seconds) || seconds <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    remainingTime = seconds;
    display.textContent = formatTime(remainingTime);

    clearInterval(timer);
    timer = setInterval(() => {
        remainingTime--;
        display.textContent = formatTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timer);
            alert('Time is up!');
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(timer);
    remainingTime = 0;
    document.getElementById('display').textContent = '00:00';
    document.getElementById('time-input').value = '';
}

document.getElementById('start').addEventListener('click', startCountdown);
document.getElementById('reset').addEventListener('click', resetCountdown);

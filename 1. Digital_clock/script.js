let is24HourFormat = true; // Default to 24-hour format

// Function to update the clock every second
function updateClock() {
    const now = new Date();

    // Format hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Switch to 12-hour format if needed
    let period = "";
    if (!is24HourFormat) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    }

    hours = String(hours).padStart(2, '0');

    // Update the clock display
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}${period}`;

    // Update the date display
    const dateElement = document.getElementById('date');
    dateElement.textContent = now.toDateString();
}

// Function to toggle between 12-hour and 24-hour formats
function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    const button = document.getElementById('toggle-format');
    button.textContent = is24HourFormat ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format";
    updateClock(); // Update immediately to reflect the change
}

// Attach event listener to the toggle button
document.getElementById('toggle-format').addEventListener('click', toggleTimeFormat);

// Update the clock immediately, then every second
updateClock();
setInterval(updateClock, 1000);

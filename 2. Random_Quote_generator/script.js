// Array of quotes
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It is better to fail in originality than to succeed in imitation. - Herman Melville",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa"
];

// Function to display a new random quote
function displayNewQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Attach event listener to the button
document.getElementById('new-quote').addEventListener('click', displayNewQuote);

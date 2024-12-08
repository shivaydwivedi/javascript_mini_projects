const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const resultDiv = document.getElementById("result");

const passwordLengthInput = document.getElementById("password-length");
const includeLowercase = document.getElementById("include-lowercase");
const includeUppercase = document.getElementById("include-uppercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    const length = parseInt(passwordLengthInput.value);
    if (isNaN(length) || length < 4 || length > 20) {
        resultDiv.textContent = "Please enter a valid length (4-20).";
        return;
    }

    let characterPool = "";
    if (includeLowercase.checked) characterPool += lowercase;
    if (includeUppercase.checked) characterPool += uppercase;
    if (includeNumbers.checked) characterPool += numbers;
    if (includeSymbols.checked) characterPool += symbols;

    if (!characterPool) {
        resultDiv.textContent = "Please select at least one character type.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    resultDiv.textContent = `Generated Password: ${password}`;
}

function copyToClipboard() {
    const password = resultDiv.textContent.replace("Generated Password: ", "").trim();
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy password.");
        });
    } else {
        alert("No password to copy.");
    }
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);

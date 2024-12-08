const unitOptions = {
    length: { units: ["Meters", "Kilometers", "Miles", "Feet"], factor: [1, 0.001, 0.000621371, 3.28084] },
    weight: { units: ["Kilograms", "Grams", "Pounds", "Ounces"], factor: [1, 1000, 2.20462, 35.274] },
    temperature: { units: ["Celsius", "Fahrenheit", "Kelvin"] }
};

const unitTypeSelect = document.getElementById("unit-type");
const fromUnitSelect = document.getElementById("from-unit");
const toUnitSelect = document.getElementById("to-unit");
const inputValue = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");

function populateUnits() {
    const selectedType = unitTypeSelect.value;
    const units = unitOptions[selectedType].units;

    fromUnitSelect.innerHTML = "";
    toUnitSelect.innerHTML = "";
    units.forEach(unit => {
        const option = `<option value="${unit}">${unit}</option>`;
        fromUnitSelect.innerHTML += option;
        toUnitSelect.innerHTML += option;
    });
}

function convertValue() {
    const unitType = unitTypeSelect.value;
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    if (unitType === "temperature") {
        let convertedValue;
        if (fromUnit === "Celsius") {
            convertedValue = toUnit === "Fahrenheit" ? (value * 9 / 5) + 32 : value + 273.15;
        } else if (fromUnit === "Fahrenheit") {
            convertedValue = toUnit === "Celsius" ? (value - 32) * 5 / 9 : ((value - 32) * 5 / 9) + 273.15;
        } else if (fromUnit === "Kelvin") {
            convertedValue = toUnit === "Celsius" ? value - 273.15 : (value - 273.15) * 9 / 5 + 32;
        }
        resultDiv.textContent = `Converted Value: ${convertedValue.toFixed(2)} ${toUnit}`;
    } else {
        const fromIndex = unitOptions[unitType].units.indexOf(fromUnit);
        const toIndex = unitOptions[unitType].units.indexOf(toUnit);

        const baseValue = value / unitOptions[unitType].factor[fromIndex];
        const convertedValue = baseValue * unitOptions[unitType].factor[toIndex];

        resultDiv.textContent = `Converted Value: ${convertedValue.toFixed(2)} ${toUnit}`;
    }
}

// Populate initial unit options
unitTypeSelect.addEventListener("change", populateUnits);
convertBtn.addEventListener("click", convertValue);
populateUnits();

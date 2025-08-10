// calculator.js

// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero to prevent errors
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Function to handle the click event for all buttons
function handleCalculation(operation) {
    // Get the input values from the number fields
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    let result;

    // Perform the specified operation
    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            result = 'Invalid operation';
    }

    // Display the result in the HTML
    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners to each button
document.getElementById('add').addEventListener('click', function() {
    handleCalculation('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    handleCalculation('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    handleCalculation('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    handleCalculation('divide');
});

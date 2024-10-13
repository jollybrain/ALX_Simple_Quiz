// Arithmetic functions
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
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Division by 0";
    }
    return number1 / number2;
}

// Function to get input values and update result
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;  // Get number1 input value
    const number2 = parseFloat(document.getElementById('number2').value) || 0;  // Get number2 input value
    let result;

    // Perform the operation based on the button clicked
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
    }

    // Display the result
    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners for each operation button
document.getElementById('add').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    calculate('divide');
});

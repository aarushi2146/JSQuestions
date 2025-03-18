// Function to generate a random two-digit number (10-99)
function getRandomTwoDigit() {
    return Math.floor(Math.random() * 90) + 10;
}

// Generate 5 random two-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomTwoDigit());
}

// Calculate sum and average
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

// Print results
console.log("Random Two-Digit Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2)); // Limiting to 2 decimal places

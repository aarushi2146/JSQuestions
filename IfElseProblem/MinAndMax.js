// Function to generate a random three-digit number (100-999)
function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100;
}

// Generate 5 random three-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigit());
}

// Find minimum and maximum values
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

// Print results
console.log("Random Three-Digit Numbers:", numbers);
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);

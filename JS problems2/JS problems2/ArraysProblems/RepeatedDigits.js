// Function to find numbers with repeated digits
function findRepeatedDigits() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) {
        let firstDigit = Math.floor(i / 10); // Get tens place digit
        let secondDigit = i % 10;            // Get ones place digit

        if (firstDigit === secondDigit) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Get repeated digit numbers
let result = findRepeatedDigits();
console.log("Numbers with repeated digits:", result);

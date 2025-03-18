const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true; // 2 and 3 are prime numbers

    if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

rl.question("Enter a number to check if it's prime: ", (input) => {
    const num = parseInt(input, 10);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid positive integer.");
    } else {
        if (isPrime(num)) {
            console.log(`${num} is a Prime Number.`);
        } else {
            console.log(`${num} is NOT a Prime Number.`);
        }
    }

    rl.close();
});

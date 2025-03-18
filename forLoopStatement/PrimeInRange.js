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

rl.question("Enter the start of the range: ", (startInput) => {
    rl.question("Enter the end of the range: ", (endInput) => {
        const start = parseInt(startInput, 10);
        const end = parseInt(endInput, 10);

        if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
            console.log("Please enter a valid positive range where start is less than or equal to end.");
        } else {
            console.log(`Prime numbers between ${start} and ${end} are:`);

            let foundPrime = false;
            for (let num = start; num <= end; num++) {
                if (isPrime(num)) {
                    process.stdout.write(num + " "); // Print primes in one line
                    foundPrime = true;
                }
            }

            if (!foundPrime) {
                console.log("No prime numbers found in this range.");
            } else {
                console.log(); // New line after primes are printed
            }
        }

        rl.close();
    });
});

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute prime factors of a number and store in an array
function primeFactorization(n) {
    let factors = [];

    if (n < 2) {
        console.log("No prime factors for numbers less than 2.");
        return factors;
    }

    // Divide N by 2 until it's odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(N)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If N is still greater than 2, it's a prime number
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Taking user input
rl.question("Enter a number to compute its prime factors: ", (input) => {
    let n = parseInt(input, 10);

    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive integer.");
    } else {
        let factors = primeFactorization(n);
        console.log(`Prime factors of ${n}: ${factors.join(", ")}`);
    }

    rl.close();
});

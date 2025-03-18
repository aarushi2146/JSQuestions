const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute prime factors of a number
function primeFactorization(n) {
    if (n < 2) {
        console.log("No prime factors for numbers less than 2.");
        return;
    }

    console.log(`Prime factors of ${n}:`);

    // Divide N by 2 until it's odd
    while (n % 2 === 0) {
        process.stdout.write("2 ");
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(N)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            process.stdout.write(i + " ");
            n /= i;
        }
    }

    // If N is still greater than 2, it's a prime number
    if (n > 2) {
        process.stdout.write(n + " ");
    }

    console.log("\n");
}

rl.question("Enter a number to compute its prime factors: ", (input) => {
    const n = parseInt(input, 10);

    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive integer.");
    } else {
        primeFactorization(n);
    }

    rl.close();
});

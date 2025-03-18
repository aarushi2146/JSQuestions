const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers.";
    if (num === 0 || num === 1) return 1; // 0! and 1! are both 1

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

rl.question("Enter a number to compute its factorial: ", (input) => {
    const num = parseInt(input, 10);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        console.log(`${num}! = ${factorial(num)}`);
    }

    rl.close();
});

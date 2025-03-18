const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter three numbers (a, b, c) separated by spaces: ", (input) => {
    const [a, b, c] = input.split(" ").map(Number);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Please enter valid numbers.");
        rl.close();
        return;
    }

    // Performing the four arithmetic operations
    const op1 = a + b * c;
    const op2 = a % b + c;
    const op3 = c + a / b;
    const op4 = a * b + c;

    // Storing results in an array
    const results = [op1, op2, op3, op4];

    // Finding max and min values
    const maxValue = Math.max(...results);
    const minValue = Math.min(...results);

    // Display results
    console.log(`Results of operations:`);
    console.log(`1. a + b * c = ${op1}`);
    console.log(`2. a % b + c = ${op2}`);
    console.log(`3. c + a / b = ${op3}`);
    console.log(`4. a * b + c = ${op4}`);

    console.log(`\nMaximum Value: ${maxValue}`);
    console.log(`Minimum Value: ${minValue}`);

    rl.close();
});

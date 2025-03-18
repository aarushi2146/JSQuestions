// Function to calculate the nth Harmonic number
function harmonicNumber(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    let harmonicSum = 0;
    console.log(`Harmonic series up to H(${n}):`);
    for (let i = 1; i <= n; i++) {
        harmonicSum += 1 / i;
        console.log(`H(${i}) = ${harmonicSum.toFixed(6)}`);
    }

    console.log(`\nThe ${n}th Harmonic Number is: ${harmonicSum.toFixed(6)}`);
}

// Get input from command line (for Node.js)
let args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Usage: node script.js <n>");
    process.exit(1);
}

// Convert input to an integer and call the function
let n = parseInt(args[0]);
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
    process.exit(1);
}

harmonicNumber(n);

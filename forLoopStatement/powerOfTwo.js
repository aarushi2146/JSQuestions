// Function to print powers of 2 up to 2^n
function printPowersOfTwo(n) {
    console.log(`Powers of 2 up to 2^${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}

// Get input from command line (for Node.js)
let args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Usage: node script.js <n>");
    process.exit(1);
}

// Convert input to an integer and call the function
let n = parseInt(args[0]);
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

printPowersOfTwo(n);

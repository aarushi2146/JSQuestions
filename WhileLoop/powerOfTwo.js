// Function to print powers of 2 up to 2^n or 256
function printPowersOf2(n) {
    let power = 0;
    let value = 1;

    console.log(`Powers of 2 up to 2^${n} or 256:`);

    while (power <= n && value <= 256) {
        console.log(`2^${power} = ${value}`);
        value *= 2;
        power++;
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

printPowersOf2(n);

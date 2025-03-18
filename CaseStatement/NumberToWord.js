const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a single-digit number (0-9): ", (input) => {
    const num = parseInt(input, 10);

    if (isNaN(num) || num < 0 || num > 9) {
        console.log("Please enter a valid single-digit number (0-9).");
    } else {
        let word;
        switch (num) {
            case 0: word = "Zero"; break;
            case 1: word = "One"; break;
            case 2: word = "Two"; break;
            case 3: word = "Three"; break;
            case 4: word = "Four"; break;
            case 5: word = "Five"; break;
            case 6: word = "Six"; break;
            case 7: word = "Seven"; break;
            case 8: word = "Eight"; break;
            case 9: word = "Nine"; break;
        }
        console.log(`The number in words is: ${word}`);
    }
    
    rl.close();
})

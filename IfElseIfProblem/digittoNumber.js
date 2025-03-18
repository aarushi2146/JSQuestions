const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberToWord(num) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    
    if (num >= 0 && num <= 9) {
        return words[num];
    } else {
        return "Please enter a single-digit number (0-9).";
    }
}

rl.question("Enter a single-digit number: ", (input) => {
    const num = parseInt(input, 10);
    console.log(numberToWord(num));
    rl.close();
});

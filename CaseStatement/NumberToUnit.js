const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1, 10, 100, 1000, ...): ", (input) => {
    const num = parseInt(input, 10);

    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    } else {
        let placeValue;
        switch (num) {
            case 1: placeValue = "Unit"; break;
            case 10: placeValue = "Ten"; break;
            case 100: placeValue = "Hundred"; break;
            case 1000: placeValue = "Thousand"; break;
            case 10000: placeValue = "Ten Thousand"; break;
            case 100000: placeValue = "Lakh"; break;
            case 1000000: placeValue = "Ten Lakh"; break;
            case 10000000: placeValue = "Crore"; break;
            case 100000000: placeValue = "Ten Crore"; break;
            default: placeValue = "Please enter a valid place value (1, 10, 100, 1000, ...)";
        }
        console.log(`The place value is: ${placeValue}`);
    }

    rl.close();
});

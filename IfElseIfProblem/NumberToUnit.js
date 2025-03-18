const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getPlaceValue(num) {
    const placeValues = {
        1: "Unit",
        10: "Ten",
        100: "Hundred",
        1000: "Thousand",
        10000: "Ten Thousand",
        100000: "Lakh",
        1000000: "Ten Lakh",
        10000000: "Crore",
        100000000: "Ten Crore"
    };

    return placeValues[num] || "Please enter a valid place value (1, 10, 100, 1000, ...)";
}

rl.question("Enter a number (1, 10, 100, 1000, ...): ", (input) => {
    const num = parseInt(input, 10);
    console.log(getPlaceValue(num));
    rl.close();
});

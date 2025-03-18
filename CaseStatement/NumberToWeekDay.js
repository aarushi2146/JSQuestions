const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1-7) to get the weekday: ", (input) => {
    const num = parseInt(input, 10);

    if (isNaN(num) || num < 1 || num > 7) {
        console.log("Please enter a valid number between 1 and 7.");
    } else {
        let day;
        switch (num) {
            case 1: day = "Sunday"; break;
            case 2: day = "Monday"; break;
            case 3: day = "Tuesday"; break;
            case 4: day = "Wednesday"; break;
            case 5: day = "Thursday"; break;
            case 6: day = "Friday"; break;
            case 7: day = "Saturday"; break;
        }
        console.log(`The corresponding weekday is: ${day}`);
    }

    rl.close();
});

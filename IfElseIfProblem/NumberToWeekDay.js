const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getWeekday(num) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (num >= 1 && num <= 7) {
        return weekdays[num - 1]; // Adjust index since array starts from 0
    } else {
        return "Please enter a number between 1 and 7.";
    }
}

rl.question("Enter a number (1-7) to get the weekday: ", (input) => {
    const num = parseInt(input, 10);
    console.log(getWeekday(num));
    rl.close();
});

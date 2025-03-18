const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isLeapYear(year) {
    if (isNaN(year) || year < 1000 || year > 9999) {
        return "Please enter a valid 4-digit year.";
    }
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year.`;
    } else {
        return `${year} is not a Leap Year.`;
    }
}

rl.question("Enter a 4-digit year: ", (input) => {
    const year = parseInt(input, 10);
    console.log(isLeapYear(year));
    rl.close();
});
    
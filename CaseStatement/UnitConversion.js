const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Choose a conversion option:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

rl.question("Enter your choice (1-4): ", (choice) => {
    const option = parseInt(choice, 10);

    if (isNaN(option) || option < 1 || option > 4) {
        console.log("Invalid choice! Please enter a number between 1 and 4.");
        rl.close();
        return;
    }

    rl.question("Enter the value to convert: ", (value) => {
        const num = parseFloat(value);

        if (isNaN(num) || num < 0) {
            console.log("Please enter a valid positive number.");
        } else {
            let result;
            switch (option) {
                case 1: 
                    result = num * 12; // 1 foot = 12 inches
                    console.log(`${num} Feet = ${result} Inches`);
                    break;
                case 2: 
                    result = num * 0.3048; // 1 foot = 0.3048 meters
                    console.log(`${num} Feet = ${result.toFixed(4)} Meters`);
                    break;
                case 3: 
                    result = num / 12; // 1 inch = 1/12 feet
                    console.log(`${num} Inches = ${result.toFixed(4)} Feet`);
                    break;
                case 4: 
                    result = num * 3.28084; // 1 meter = 3.28084 feet
                    console.log(`${num} Meters = ${result.toFixed(4)} Feet`);
                    break;
            }
        }

        rl.close();
    });
});

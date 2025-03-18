const readline = require("readline");

// Setup input/output interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert temperature
function temperatureConversion() {
    console.log("Temperature Conversion:");
    console.log("1: Convert Celsius to Fahrenheit");
    console.log("2: Convert Fahrenheit to Celsius");

    rl.question("Enter your choice (1 or 2): ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter temperature in Celsius (0 - 100): ", (degC) => {
                    degC = parseFloat(degC);
                    if (degC >= 0 && degC <= 100) {
                        let degF = (degC * 9/5) + 32;
                        console.log(`${degC}°C = ${degF.toFixed(2)}°F`);
                    } else {
                        console.log("Invalid input! Enter a temperature between 0 and 100°C.");
                    }
                    rl.close();
                });
                break;

            case "2":
                rl.question("Enter temperature in Fahrenheit (32 - 212): ", (degF) => {
                    degF = parseFloat(degF);
                    if (degF >= 32 && degF <= 212) {
                        let degC = (degF - 32) * 5/9;
                        console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
                    } else {
                        console.log("Invalid input! Enter a temperature between 32 and 212°F.");
                    }
                    rl.close();
                });
                break;

            default:
                console.log("Invalid choice! Please enter 1 or 2.");
                rl.close();
        }
    });
}

// Run the function
temperatureConversion();

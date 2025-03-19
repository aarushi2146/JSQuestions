// Function to generate random birth months for 50 individuals
function generateBirthMonths() {
    let birthMonthMap = {};

    for (let i = 1; i <= 50; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; // Random month (1-12)

        // Store individuals in the corresponding month
        if (!birthMonthMap[birthMonth]) {
            birthMonthMap[birthMonth] = [];
        }
        birthMonthMap[birthMonth].push(`Person${i}`);
    }

    return birthMonthMap;
}

// Function to display birth month groups
function displayBirthMonthGroups(birthMonthMap) {
    console.log("\nIndividuals grouped by birth month:");
    for (let month in birthMonthMap) {
        console.log(`Month ${month}: ${birthMonthMap[month].join(", ")}`);
    }
}

// Generate and display results
let birthMonthMap = generateBirthMonths();
displayBirthMonthGroups(birthMonthMap);

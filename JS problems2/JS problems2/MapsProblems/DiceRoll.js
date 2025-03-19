// Function to roll a die (returns a random number between 1 and 6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to simulate rolling a die until one number appears 10 times
function simulateDiceRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRoll = 10;
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        rollCounts[roll]++;

        // Check if any number has reached 10 times
        if (rollCounts[roll] === maxRoll) {
            maxReached = true;
        }
    }

    console.log("Final roll counts:", rollCounts);

    // Finding the most and least frequent numbers
    let maxNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    console.log(`Number that reached 10 times first: ${maxNumber}`);
    console.log(`Number that appeared the least: ${minNumber}`);
}

// Run the simulation
simulateDiceRolls();

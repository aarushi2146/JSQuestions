// Function to simulate the Gambler's game
function gamblerSimulation() {
    let money = 100;   // Starting money
    let goal = 200;    // Target money
    let bets = 0;      // Total number of bets
    let wins = 0;      // Number of wins

    console.log("Starting the gambling game...");

    while (money > 0 && money < goal) {
        bets++;  // Increment bet count
        let betResult = Math.random() < 0.5;  // 50% chance to win or lose

        if (betResult) {
            money++;  // Win: Gain Rs 1
            wins++;
        } else {
            money--;  // Lose: Lose Rs 1
        }

        console.log(`Bet: ${bets} | Money: Rs ${money} | Wins: ${wins}`);
    }

    console.log(`\nGame Over! Final Money: Rs ${money}`);
    console.log(`Total Bets Made: ${bets}`);
    console.log(`Total Wins: ${wins}`);
    console.log(money === 200 ? "Gambler reached the goal!" : "Gambler went broke!");
}

// Run the function
gamblerSimulation();

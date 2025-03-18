// Function to simulate coin flip until one side wins 11 times
function flipCoinUntilWinner() {
    let headsCount = 0, tailsCount = 0;
    
    console.log("Flipping the coin until either Heads or Tails wins 11 times...");

    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Tails" : "Heads";

        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }

        console.log(`Flip: ${flip} | Heads: ${headsCount} | Tails: ${tailsCount}`);
    }

    console.log(`\nWinner: ${headsCount === 11 ? "Heads" : "Tails"}!`);
}

// Run the function
flipCoinUntilWinner();

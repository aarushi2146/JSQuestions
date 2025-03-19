const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find triplets that sum to zero
function findTriplets(arr) {
    let n = arr.length;
    let triplets = [];

    // Sort the array to make it easier to find triplets
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate elements
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1, right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                
                // Move left and right to avoid duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Taking user input
rl.question("Enter numbers separated by space: ", (input) => {
    let arr = input.split(" ").map(Number);

    if (arr.length < 3) {
        console.log("Please enter at least 3 numbers.");
    } else {
        let result = findTriplets(arr);
        if (result.length > 0) {
            console.log("Triplets whose sum is zero:", result);
        } else {
            console.log("No triplets found.");
        }
    }

    rl.close();
});

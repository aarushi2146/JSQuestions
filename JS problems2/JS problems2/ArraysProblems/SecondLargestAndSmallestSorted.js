function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b); // Sorting in ascending order
    return {
        secondSmallest: arr[1], // 2nd element after sorting
        secondLargest: arr[arr.length - 2] // 2nd last element after sorting
    };
}

// Step 1 & 2: Generate 10 random 3-digit numbers and store them in an array
let randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

// Step 4: Sort the array and find the second largest and second smallest numbers
let sortedResult = findSecondLargestAndSmallestSorted([...randomNumbers]);
console.log("Sorted Array:", randomNumbers.sort((a, b) => a - b));
console.log("With Sorting - Second Largest:", sortedResult.secondLargest);
console.log("With Sorting - Second Smallest:", sortedResult.secondSmallest);

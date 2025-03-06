// Function to generate an array of 10 random 3-digit numbers
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Random number between 100-999
    }
    return numbers;
}

// Function to find 2nd largest and 2nd smallest after sorting
function findSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b); // Sort array in ascending order
    console.log("Sorted Numbers:", arr);
    
    let secondSmallest = arr[1];
    let secondLargest = arr[arr.length - 2];

    return { secondLargest, secondSmallest };
}

// Main Execution
let numbers = generateRandomNumbers();
console.log("Generated Numbers:", numbers);

let result = findSecondLargestAndSmallestSorted(numbers);
console.log("2nd Smallest Number:", result.secondSmallest);
console.log("2nd Largest Number:", result.secondLargest);

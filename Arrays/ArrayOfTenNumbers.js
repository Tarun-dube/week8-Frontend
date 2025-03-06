// Function to generate an array of 10 random 3-digit numbers
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Random number between 100-999
    }
    return numbers;
}

// Function to find the 2nd largest and 2nd smallest number without sorting
function findSecondLargestAndSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;

    for (let num of arr) {
        // Finding 1st and 2nd Largest
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

        // Finding 1st and 2nd Smallest
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }

    return { secondLargest: secondMax, secondSmallest: secondMin };
}

// Main Execution
let numbers = generateRandomNumbers();
console.log("Generated Numbers:", numbers);

let result = findSecondLargestAndSmallest(numbers);
console.log("2nd Largest Number:", result.secondLargest);
console.log("2nd Smallest Number:", result.secondSmallest);

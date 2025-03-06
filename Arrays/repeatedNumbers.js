// Function to find numbers with repeated digits in range 0-100
function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) { // Two-digit numbers only
        let tens = Math.floor(i / 10); // Extract tens place digit
        let ones = i % 10;             // Extract ones place digit

        if (tens === ones) { // Check if both digits are the same
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Main Execution
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);

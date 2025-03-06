const prompt = require("prompt-sync")(); // Import prompt-sync

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;  // 0 and 1 are not prime
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false; // If divisible, not prime
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join("")); // Reverse digits
}

// Main function to check prime and palindrome prime
function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is NOT a prime number.`);
        return;
    }

    let palindrome = getPalindrome(num);

    console.log(`${num} is a Prime Number ✅`);
    console.log(`Palindrome of ${num} is ${palindrome}`);

    if (isPrime(palindrome)) {
        console.log(`Palindrome ${palindrome} is also a Prime Number ✅`);
    } else {
        console.log(`Palindrome ${palindrome} is NOT a Prime Number ❌`);
    }
}

// Taking user input
let number = parseInt(prompt("Enter a number: "));
checkPrimeAndPalindrome(number);

const prompt = require("prompt-sync")(); // Import prompt-sync

let N = parseInt(prompt("Enter a number: "));

console.log(`Prime factors of ${N} are:`);

// First, divide by 2 while it's even
while (N % 2 === 0) {
    console.log(2);
    N = N / 2;
}

// Check for odd factors from 3 to √N
for (let i = 3; i * i <= N; i += 2) {
    while (N % i === 0) {
        console.log(i);
        N = N / i;
    }
}

// If N is still greater than 2, it's a prime number itself
if (N > 2) {
    console.log(N);
}

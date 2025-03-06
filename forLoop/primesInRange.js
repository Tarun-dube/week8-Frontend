const prompt=require("prompt-sync")();
let start = parseInt(prompt("Enter the start of the range: "));
let end = parseInt(prompt("Enter the end of the range: "));

let primes = [];

for (let num = start; num <= end; num++) {
    if (num < 2) continue;
    
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        primes.push(num);
    }
}

console.log(`Prime numbers in the range ${start} to ${end} are:`);
console.log(primes.join(" "));

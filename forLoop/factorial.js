const prompt = require("prompt-sync")(); // Import prompt-sync

let num = parseInt(prompt("Enter a number: "));
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`${num}! = ${factorial}`);

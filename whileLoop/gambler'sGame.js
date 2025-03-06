const prompt = require("prompt-sync")(); // Import prompt-sync

let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

console.log("Gambler starts with ₹100 and bets ₹1 per round.");

while (money > 0 && money < goal) {
    bets++; // One bet per round
    let gamble = Math.random() < 0.5; // 50% chance of winning
    
    if (gamble) {
        money++; // Win ₹1
        wins++;
    } else {
        money--; // Lose ₹1
    }

    console.log(`Bet ${bets}: ${gamble ? "Win" : "Lose"} | Money: ₹${money}`);
}

console.log("\nGame Over!");
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === goal ? "Gambler reached the goal of ₹200! 🎉" : "Gambler went broke! 😢");

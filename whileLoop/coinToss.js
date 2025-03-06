const prompt = require("prompt-sync")(); // Import prompt-sync

console.log("Flipping a coin until either Heads or Tails wins 11 times...");

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails"; // 50% chance for each
    
    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${flip} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log("\nGame Over!");
console.log(headsCount === 11 ? "Heads wins!" : "Tails wins!");

const prompt = require("prompt-sync")(); // Import prompt-sync

console.log("Think of a number between 1 and 100, and I will guess it!");

let low = 1;
let high = 100;
let found = false;

while (!found) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/no): `).toLowerCase();

    if (response === "yes") {
        console.log(`Great! Your magic number is ${mid}!`);
        found = true;
    } else {
        let hint = prompt(`Is your number greater than ${mid}? (yes/no): `).toLowerCase();
        
        if (hint === "yes") {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

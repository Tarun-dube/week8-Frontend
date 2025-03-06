// Function to simulate die roll and track occurrences using Map
function rollDieSimulation() {
    let dieRolls = new Map(); // Using Map for tracking die rolls
    let maxCount = 10; // Stop condition when a number reaches this count

    // Initialize map with numbers 1-6
    for (let i = 1; i <= 6; i++) {
        dieRolls.set(i, 0);
    }

    while (true) {
        let roll = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
        dieRolls.set(roll, dieRolls.get(roll) + 1); // Update count in Map

        // Check if any number reached 10 times
        if (dieRolls.get(roll) === maxCount) break;
    }

    console.log("Final Die Roll Counts:", Object.fromEntries(dieRolls));

    // Find number that appeared the most and the least
    let maxNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    let minNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

    console.log(`Number that appeared the most: ${maxNumber} (${dieRolls.get(maxNumber)} times)`);
    console.log(`Number that appeared the least: ${minNumber} (${dieRolls.get(minNumber)} times)`);
}

// Run the simulation
rollDieSimulation();

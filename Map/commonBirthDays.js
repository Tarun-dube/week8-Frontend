// Function to generate 50 individuals' birth months and group them
function generateBirthMonths() {
    let birthMonthMap = new Map();

    // Initialize map with months (1-12)
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []); // Empty array for each month
    }

    // Generate random birth months for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        birthMonthMap.get(birthMonth).push(i); // Store individual ID in the corresponding month
    }

    // Print individuals grouped by month
    console.log("Individuals grouped by birth month:");
    birthMonthMap.forEach((individuals, month) => {
        if (individuals.length > 0) {
            console.log(`Month ${month}: ${individuals}`);
        }
    });
}

// Run the program
generateBirthMonths();

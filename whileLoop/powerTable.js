// Get command-line argument (n)
const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid positive integer for n.");
    process.exit(1);
}

console.log(`Powers of 2 up to 2^${n} (max 256):`);

let power = 1; // 2^0 = 1
let i = 0;

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2; // Multiply by 2 in each step
    i++;
}

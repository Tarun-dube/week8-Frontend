// Function to find triplets that sum to zero
function findTriplets(arr) {
    let n = arr.length;
    let triplets = [];

    // Sort the array to make searching easier
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate elements
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1, right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                
                // Move left and right pointers and skip duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase sum by moving left pointer
            } else {
                right--; // Decrease sum by moving right pointer
            }
        }
    }

    return triplets;
}

// Example usage
let numbers = [-1, 0, 1, 2, -1, -4, 3];
console.log("Input Array:", numbers);

let result = findTriplets(numbers);
if (result.length > 0) {
    console.log("Triplets that sum to zero:", result);
} else {
    console.log("No triplets found that sum to zero.");
}

function jumpSearch(arr, target) {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n)); // Change: Using 'let' instead of 'const'
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1; // Target not found in the array.
        }
    }

    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i; // Target found.
        }
    }

    return -1; // Target not found in the array.
}

// Example usage
const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const target = 55;

const result = jumpSearch(numbers, target);
if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target not found in the array.`);
}

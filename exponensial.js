function exponentialSearch(arr, target) {
    const n = arr.length;

    if (arr[0] === target) {
        return 0; // Target is the first element of the array.
    }

    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, i / 2, Math.min(i, n - 1));
}

function binarySearch(arr, target, left, right) {
    if (right >= left) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid.
        }

        if (arr[mid] > target) {
            return binarySearch(arr, target, left, mid - 1);
        }

        return binarySearch(arr, target, mid + 1, right);
    }

    return -1; // Target not found in the array.
}

// Example usage
const numbers = [0,2,4,6,8,13,34,,67,92,99];
const target = 13;

const result = exponentialSearch(numbers, target);
if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target not found in the array.`);
}

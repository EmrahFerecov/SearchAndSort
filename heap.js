function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        const swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Build a max-heap by calling heapify for each element in the second half of the array.
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one from the heap.
    for (let i = n - 1; i > 0; i--) {
        // Move the current root (the maximum element) to the end of the array.
        const swap = arr[0];
        arr[0] = arr[i];
        arr[i] = swap;

        // Call heapify on the reduced heap to restore its max-heap property.
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage
const numbers = [5,10,1,12,9,6];
const sortedNumbers = heapSort(numbers);
console.log(sortedNumbers);

function flip(arr, n) {
    var tmp = 0;
    // Swaps i and n - i
    for (var i = 0; i <= n; i++, n--) {
        tmp = arr[i];
        arr[i] = arr[n];
        arr[n] = tmp;
    }
    return arr;
}

function pancakeSort(arr) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        let max = arr[0];
        let index = 0;
        // Find the max in arr.length - i
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                index = j;
            }
        }
        // Flip the max to the front
        arr = flip(arr, index)
        // Flip the max to the highest position not taken by the max
        arr = flip(arr, arr.length - 1 - i)
    }
    return arr;
}
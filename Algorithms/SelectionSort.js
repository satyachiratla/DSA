function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        var lowest = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([3,56,34,23,1,6]));
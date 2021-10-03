function maxSubArraySum(arr, num) {
    
    if (num > arr.length) {
        return null;
    }

    var max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (j = 0; j < num; j++) {
            temp = temp + arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

console.log(maxSubArraySum([1,1,1,2,4,5,1,2], 3));
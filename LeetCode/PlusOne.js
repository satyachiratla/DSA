function plusOne(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
}

console.log(plusOne([1,2,9]));


//Sum of an array
function add(arr) {
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(add([1,2,3]));
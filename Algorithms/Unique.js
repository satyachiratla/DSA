const unique = (arr) => {
    let i = 0;

    if (arr.length === 0) {
        return 0;
    }

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(unique([1,1,1,2,5,3,4,4]));
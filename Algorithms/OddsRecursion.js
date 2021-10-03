// function odds(arr) {

//     let newArray = [];

//     if (arr.length === 0) {
//         return newArray;
//     }

//     if (arr[0] % 2 !== 0) {
//         newArray.push(arr[0]);
//     }

//     newArray = newArray.concat(odds(arr.slice(1)));
//     return newArray;
// }

// console.log(odds([1,2,3,4,5]));

function odds(n) {

    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            return i;
        }
    }
}

console.log(odds(5));
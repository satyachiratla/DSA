function merge(arr1, arr2) {
    var results = [];
    var i = 0;
    var j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr1.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([4,2,67,23,1,3,0])); 



function merge(left, right) {
    var results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    while (left.length) {
        results.push(left.shift());
    }

    while (right.length) {
        results.push(right.shift());
    }

    return results;
}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    var center = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, center));
    var right = mergeSort(arr.slice(center, arr.length));

    return merge(left, right);
};

console.log(mergeSort([3,1,45,23,2])); 


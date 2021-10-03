function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
      if (val < arr[middle]) {
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
};

console.log(binarySearch([1,2,5,6,3,67,78,87], 78));

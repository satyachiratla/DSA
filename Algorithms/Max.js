function max(arr) {
  var largest = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(max([1,2,3]));

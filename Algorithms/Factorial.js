function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1)
} 

// function fact(n) {
//   let result = 1;
//   if (n === 0 || n === 1) {
//     return result;
//   } else {
//     for (i = n; i > 0; i--) {
//         result = result * i;
//     }
//   }
//   return result;
// }

console.log(factorial(3));

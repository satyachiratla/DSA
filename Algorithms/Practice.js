// function charCount(str) {
//     var result = {};

//     for (let i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
        
//         if (result[char] > 0) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         }
//     }

//     return result;
// }

// console.log(charCount("vivek"));

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return true;
//   }

// console.log(isPrime(7));

const prime = (num) => {
    
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
        else return true
      }
    }
  }
  
  console.log(prime(5))
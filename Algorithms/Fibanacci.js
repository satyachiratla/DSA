// Recursion
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)) 

// Iteration
function fib(n) {
    var result = [0, 1];

    for (var i = 2; i <= n; i++) {
        var a = result[i - 1];
        var b = result[i - 2];

        result.push(a + b);
    }
    return result[n];
}

console.log(fib(5)) 

// For Excellent Performance, Exponential Runtime
function memoize(fn) {
    const cache = {}

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowfib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowfib);

console.log(fib(15))
function sqat(x) {

    var left = 0;
    var right = x;

    if (x < 2) {
        return x;
    }

    while (left < right) {
        var mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            right = mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        }
    }

    return left - 1
}

console.log(sqat(50));
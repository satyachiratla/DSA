function rightAngle(n) {
    let string = "";

    for (let i = 1; i <= n; i++) {
        for (j = 0; j < i; j++) {
            string = string + "*"
        }
        string = string + "\n";
    }
    return string;
}

console.log(rightAngle(5));
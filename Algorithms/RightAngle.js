function rightAngle(n) {
    var string = "";

    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            string = string + "*";
        }
        string = string + "\n";
    }
    return string;
}

console.log(rightAngle(7));
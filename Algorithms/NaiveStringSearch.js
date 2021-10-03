function naiveStringSearch(long, short) {
    var count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i+j]);
            if (short[j] !== long[i + j]) {
                console.log("Break");
                break;
            } else if (j === short.length - 1) {
                console.log("Found!");
                count++;
            }
        }
    }
    return count;
}

console.log(naiveStringSearch("lollylol", "lol"));
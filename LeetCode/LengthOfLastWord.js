function lengthOfLastWord(s) {
    var lastWordLength = 0;
    var beforeFirstNonEmptyChar = true;

    if (s.length === 0) {
        return lastWordLength;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            lastWordLength++;
            beforeFirstNonEmptyChar = false;
        } else if (!beforeFirstNonEmptyChar) {
            break;
        }
    }

    return lastWordLength;
}

console.log(lengthOfLastWord("vivek chowdary"));
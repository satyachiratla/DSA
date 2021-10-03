const longestCommonPrefix = (strs) => {
    let longest = '';

    if (strs.length === 0) {
        return longest;
    }

    let comparisonWord = strs[0];
    let comparisonIndex = 0;

    for (let comparisonLetter of comparisonWord) {
        for (let i = 1; i < strs.length; i++) {
            let currnetWord = strs[i];
            let currentLetter = currnetWord.charAt(comparisonIndex);

            if (comparisonLetter !== currentLetter || comparisonIndex > currnetWord.length) {
                return longest;
            }
        }
        comparisonIndex++;
        longest += comparisonLetter;
    }
    return longest;
}

console.log(longestCommonPrefix(['flower', 'fly']));
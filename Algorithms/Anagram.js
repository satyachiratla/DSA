/*const anagram = (stringA, stringB) => {
    let aCharMap = buildCharMap(stringA);
    let bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

const buildCharMap = (str) => {
    let charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

console.log(anagram('anagram', 'nagaram'));*/

const anagram = (stringA, stringB) => {
    return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase.split('').sort().join('');
}

function validAnagram(string1, string2) {

    if (string1.length !== string2.length) {
        return false;
    }

    var result = {};

    for (let i = 0; i < string1.length; i++) {
        let letter = string1[i];

        if (result[letter] > 0) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }

    for (let i = 0; i < string2.length; i++) {
        let letter = string2[i];

        if (result[letter]) {
            result[letter]--;
        } else {
            return false;
        }
    }

    return true;
}

console.log(validAnagram("vivek", "kevio"));
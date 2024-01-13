//1
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

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

function buildCharMap(str) {
    const charMap = {};
    
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

//1*
function anagrams(stringA, stringB) {
    const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
    const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
    const lookup = {};

    if (strA.length !== strB.length) {
        return false;
    }

    for (let char of strA) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (let char of strB) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] --;
        }
    }
    return true;
}

//2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

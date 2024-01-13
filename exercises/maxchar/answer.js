//common string questions
/**
    - what is the most common character in the string?
    - Does string A have the same characters as string B (is it an anagram?)
    - Does the given string have any repeated characters in it?
 */

    function maxChar(str) {
        const charMap = {};
        let maxCharValue = 0;
        let maxChar = '';
    
        for (let char of str) {
           charMap[char] = charMap[char] + 1 || 1;
           if (charMap[char] > maxCharValue) {
                maxCharValue = charMap[char];
                maxChar = char
            }
        }
        
        return maxChar;
    }
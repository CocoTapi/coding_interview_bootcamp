//common string questions
/**
    - what is the most common character in the string?
    - Does string A have the same characters as string B (is it an anagram?)
    - Does the given string have any repeated characters in it?
 */

    
    /*
0. fix all letter to lowercase and remove the space. 
1. if the length of the string is less than two, return the character.
2. make an object to store the letters
3. make a variable called maxCharValue to store the maximum count of any character.
4. make a variable called maxChar to store the character with the maximum count
5. iterate through each character of fixed string.
    a. update the count of the current character in the object.
    b. if the count of current character is greater than the current maximum count
        i. update the count of maximum character
        ii. set the character as the maximum character 
4. return the maximum character
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
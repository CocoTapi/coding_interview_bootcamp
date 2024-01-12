//1
function palindrome(str) {
    const revered = str.split('').reverse().join('');

    return str === revered;
}

//2
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}
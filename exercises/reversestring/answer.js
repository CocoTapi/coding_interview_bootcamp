//1
function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

//2

/*
0. make a empty string. 
1. iterate through each letter 
    a. put larger index to the front and smaller one to the back
2. return the result
*/

function reverse(str) {
    let revered = '';

    for (let character of str) {
        revered = character + revered;
    }
    return revered;
}

//3 this might be good to show you understand reduce()
function reverse(str) {
    return str.split('').reduce((revered, character) => {
        return character + revered
    }, '')
}

//3 clean up version
function reverse(str) {
    return str.split('').reduce((revered, character) => character + revered, '')
}

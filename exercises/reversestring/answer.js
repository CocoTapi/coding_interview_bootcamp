//1
function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

//2
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

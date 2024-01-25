//1
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++){
           if (midpoint - row <= column && midpoint + row >= column) {
                level += "#";
           } else {
                level += ' ';
           }
        }
        console.log(level);
    }
}

//2

/*
1. Base case: if n is equal to row, exit the function
2. if the length of a level of string, 
    a. print the level
    b. move to the next row by calling the function
3. make a variable to set the middle point of the level.
4. make a variable to add it to the string in the same level
5. if the length of the level is greater than and equal to midpoint minus row and 
    the kength of the level is less than and equal to the midpoint plus row,
    a. add '#' to the level
6. if none of the above, 
    b. add space to the level
7. keep adding it to the level by calling the function
*/

function pyramid(n, row = 0, level = '') {
    if (n === row){
        return;
    }

    if (level.length === 2 * n - 1){
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}
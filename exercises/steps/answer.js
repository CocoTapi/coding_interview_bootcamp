//1

//iterate through rows (i)
    //create ab empty string 'stair'
    //iterate through columns (j)
        //if the crrent column is equal to or less than the current row
            //add a '#' to 'stair'
        //else
            //add a space to 'stair'
    //console.log 'stair'

    function steps(n) {
        for (let i = 0; i < n; i++) {
             let stair = '';
     
             for (let j = 0; j < n; j++) {
                 if (j <= i) {
                     stair += '#';
                 } else {
                     stair += ' ';
                 }
             }
             console.log(stair);
        }
     }


//recursive solution

//if row ===n, then we have hit the end of our problem
//if the stair string has a length ===n, 
    //then we are at the end of a row
//if the length of the stair string is less than or equal to the row number, 
    //we're working on. 
    //we add a #, otherwise add a space

    function steps(n, row = 0, stair = '') {
        if (n === row){
            return;
        }
    
        if (n === stair.length) {
            console.log(stair);
            return steps(n, row + 1);
        }
    
        if (stair.length <= row) {
            stair += "#";
        } else {
            stair += ' ';
        }
        steps(n, row, stair);
    }

    //shorten version

    function steps(n, row = 0, stair = '') {
        if (n === row){
            return;
        }
    
        if (n === stair.length) {
            console.log(stair);
            return steps(n, row + 1);
        }
    
        const add = stair.length <= row ? '#' : ' ';
        steps(n, row, stair + add);
    }

    //4

    /*
1. base case: if n = row, exit the function
2. if the length of string = n, 
    a. print the string,
    b. move to the next row by calling the function
3. make an empty variable to store adding item
4. if the length of stair < row, 
    a. add #
    b. else, add a space
5. repeat 4 until by calling the function with adding item.
*/
function steps(n, row = 0, stair = '') {
    if (row === n) return;

    if (stair.length === n) {
        console.log(stair);
        return steps(n, row += 1);
    }

    let add;

    if(stair.length <= row) {
        add = '#';
    } else {
        add = ' ';
    }

    return steps(n, row, stair + add);
}
    


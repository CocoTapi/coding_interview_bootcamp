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
    


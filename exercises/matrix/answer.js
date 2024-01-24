//1

/*
1. make an array to return the end.
2. insert empty subarrays into the result array.
3. make a start and end pointers for column and row
4. make a counter variable 
5. while start column is smaller than end column ANS start row is smaller than end column
    a. insert numbers in current top array from left to right
    b. add 1 to the start row
    c. insert numbers in the current most right side from top to bottom
    d. remove 1 from the column end
    e. insert numbers in current bottom from right to left
    f. remove 1 from the row end
    g. insert numbers in the current most left side from bottom to top
    h. add 1 to the start column
6. return the result array. 
*/

function matrix(n) {
    const results = [];
    
    //put subarray first
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //top row from left to right 
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //the most right side columns from top to bottom
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        //bottom row from right to left
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column from bottom to top
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++
    }
    return results;

}
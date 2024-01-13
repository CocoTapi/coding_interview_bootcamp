//1

//create empty array to hold chunks called "chunked"
//for each element in the unchunked array
    //retrieve the last element in 'chunked'
    //if last element does not exist, or if its length is equal to chunk size
        //push a new chunk into "chunked" with the current element
    //else add the current element into the chunk

    function chunk(array, size) {
        const newArr = [];
    
        for (let element of array) {
            const last = newArr[newArr.length - 1];
    
            if (!last || last.length === size) {
                newArr.push([element]);
            } else {
                last.push(element);
            }
        }
        return newArr;
    }

//2
function chunk(array, size) {
    const newArr = [];
    let index = 0;
    while(index < array.length) {
        newArr.push(array.slice(index, index + size))
        index += size;
    }
    return newArr
}

//3
function chunk(array, size) {
    const newArr = [];
    let index = 0;
    while (index < array.length) {
        const tempArr = [];
        for (let j = 0; j < size && index < array.length; j++) {
            tempArr.push(array[index]);
            index++;
        }
        newArr.push(tempArr);
    }
    return newArr;
}
//1
    function chunk(array, size) {
        const newArr = [];
        
            for (let element of array) {
                const lastSubArr = newArr[newArr.length - 1];
        
                if (!lastSubArr || lastSubArr.length === size) {
                    newArr.push([element]);
                } else {
                    lastSubArr.push(element);
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
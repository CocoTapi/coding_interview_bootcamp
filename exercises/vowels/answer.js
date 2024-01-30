//1
function vowels(str) {
    const lowerCaseStr = str.toLowerCase();
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
    //you can do string like 'aeiou'
    
    for (let char of lowerCaseStr) {
        if (checker.includes(char)) {
            count++;
        }
    }
    return count;
}

//2
function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    // /[aeiou]/g 
    //-> g :  we don't stop at the first match that we find inside of our thing. 
    //        if there are multiple, we're going to attenpt to find them all 
    //-> i :  case insentive. it will catch upper and lower cases
    //.match returns the item that matches or if zero match, return null. 
    return matches ? matches.length : 0;
}

//3
/*
1. set a variable to store vowels. 
2. set a variable to count vowels. 
3. iterate through a string
    a. if a letter is one of vowels, 
        i. add count
4. return the count
*/
function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];  //O(5) => O(1)
    let counter = 0;

    for(let char of str.toLowerCase()) {
        for(let v of vowels) {
            if (v === char) {
                counter++;
            }
        }
    }

    return counter;
}
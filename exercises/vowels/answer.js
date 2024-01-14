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
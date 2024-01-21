/*
1. iterate numbers from 1 to n. 
    a. if the number is the number which is devisible by both three and five, print 'fizzbuzz'
    b. if the number is the number which is devisible by three, print 'fizz'
    c. if the number is the number which is devisible five, print 'buzz'
    d. if none of the above conditions are met, print the numer.  
*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i)
        }
    }
}
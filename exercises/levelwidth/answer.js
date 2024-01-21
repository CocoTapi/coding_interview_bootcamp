/*
0. if the root node is empty, return an array with 0.
1. set the answer array to store the width of each level. initially add 0.
2. set the lookup array to store each level of children and initially add the root node and a string as a sign to the end of the level. 
3. until there is only one element('s') left
    a. dequeue the first element from lookup array. 
        i. if it is 's', the current level has done 
            - add 0 to the answer array for the next round.
            - remove 's' for the next round.
        ii. if it is a node,
            - enqueue its childrent to lookup array
            - increent the count of the last element in the answer array
4. return answer array.  
*/

function levelWidth(root) {
    const counters = [0];
    const arr = [root, 's'];

    while(arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    return counters;


}
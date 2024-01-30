/*
1. set a function that takes node and optional parameters of minimum and maximum numbers
2. if there is max number and the data of node > max, return false
3. if there is min number and the data of node < min, return false
4. if there is a left hand and 
    when recursively called the function with left subtree with the current node as a max number, 
    and didn't pass the conditions, return false
5. if there is a right hand and 
    when rrecursively called the function with right subtree with the current node as a min number, 
    and didn't pass the conditions, return false
6. if all checks pass, return true
*/

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}
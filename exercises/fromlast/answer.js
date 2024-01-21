/*
0. if n is 0, return the last node
1. set 2 pointers, called slow and fast, and both starging from the first node. 
2. move the fast pointer n nodes ahead
3. until the fast pointer reaches the end node, 
    a. move the fast and slow pointers by one. 
4. return the slow pointer
*/

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while( n > 0) {
        fast = fast.next;
        n--;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
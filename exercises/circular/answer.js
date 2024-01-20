function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}

//2
/*
1. set 2 pointers, called slow and fast, to head
2. move the pointers. slow will move 1 node, fast will move 2 nodes.
3. until the pointers either 
    a. reach the end of the linkedlist 
        i. return false
    b. the fast pointer is at the same node as the slow pointer
        i. return true
*/

function circular(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next) {
        if(fast === null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    } 
    return false;
}
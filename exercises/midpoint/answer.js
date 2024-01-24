/*
1. make a slow pointer, starting from the first node
2. make a fast pointer, starting from the first node
3. while the next of fast pointer and the 2 nodes ahead of fast pointer,
    a. slow pointer moves next node
4. return the node at the slow pointer.  
*/

function midpoint(list) {
    if(!list.head) return null;

    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

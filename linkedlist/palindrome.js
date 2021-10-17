/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    if(!head) return false
    
    const middle = middleNode(head)
    let reverse = reverseList(middle)
    
    while(reverse){
        if(reverse.val !== head.val) return false
        reverse = reverse.next
        head = head.next
    }
    
    return true
    
};

var reverseList = function(head) {
    let prev = null
    let current = head
    
    while(current){
        next = current.next
        current.next = prev
        prev = current;
        current = next
        
    }
    
    return prev
};

var middleNode = function(head) {
    let slow = head;
    let fast = head.next
    
    while(fast){
        slow = slow.next
        if(!fast.next) break
        fast = fast.next.next
    }
    
    return slow
};




function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    return this
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const res = ListNode(0, head);// Sentinel node 
    
    let current = res;
    
    while(current?.next){
        current.next.val === val 
            ? current.next = current.next.next 
            : current = current.next
    }
        
    return res.next
};

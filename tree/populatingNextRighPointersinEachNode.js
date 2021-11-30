/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undeel.next = '#'fined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root || root.length === 0){
        return root
    }
    const queue = [root]
    
    
    while(queue.length){
        const len = queue.length
        for(let i = 0; i < len; i++){
            const el = queue.shift()
            if(i !== len - 1){
                 el.next = queue[0]
            }
            if(el.left){
                queue.push(el.left)
            }
            if(el.right){
                queue.push(el.right)
            
            }
            
            
        }
        
         // for(let i = 0; i < queue.length; i++){
         //     if(queue[i+1]){
         //         queue[i].next = queue[i+1]
         //      }
         // } 
    }
    
    return root
};


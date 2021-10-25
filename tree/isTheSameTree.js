/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stack = [];
    
    stack.push(p);
    stack.push(q);
    
    while(stack.length > 0){
        const q = stack.pop();
        const p = stack.pop(); 
        
        if(!p && !q) continue;
        
        if(!p || !q) {
            return false
        }
        
        if(p.val !== q.val){
            return false
        }
        
        stack.push(p.left)
        stack.push(q.left)
        
        stack.push(p.right)
        stack.push(q.right)
    }
    
    return true
};

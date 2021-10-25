/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const stack = []
    stack.push(root);
    
    if(!root){
        return false
    }
    
    while(stack.length > 0){
        const node = stack.pop();
       
        if(!node?.left?.val && !node?.right?.val && node?.val === targetSum){
           return true
        }
        
        
        if (node.left) {
            node.left.val += node.val;
            stack.push (node.left);
        }
        if (node.right) {
            node.right.val += node.val;
            stack.push (node.right);
        }
  
    }
    
    return false
};

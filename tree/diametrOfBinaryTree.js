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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiam = 0
    
    const longestPath = (node) => {
        if(!node){
            return 0
        }
        
        let left = longestPath(node.left)
        let right = longestPath(node.right)
        
        maxDiam = Math.max(maxDiam, left+right)
        
        return Math.max(left,right)+1
    }
    
    longestPath(root)
    
    return maxDiam
};

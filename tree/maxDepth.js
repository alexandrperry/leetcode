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
var maxDepth = function(root) {
    let maxDepth = 0
    
    if(!root){
        return 0
    }
    
    let rec = (node1,node2,depth=1) => {
        if(node1){
            rec(node1?.left,node1?.right,depth+1)
        }
        if(node2){
            rec(node2?.left,node2?.right,depth+1)
        }
        maxDepth = Math.max(maxDepth,depth)
        
    }
            
    rec(root?.left,root?.right)
            
    return maxDepth
};

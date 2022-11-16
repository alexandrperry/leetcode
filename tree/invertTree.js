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
 * @return {TreeNode}
 */
var invertTree = function(node) {
    if(!node){
        return null
    }
    const temp = node.left
    node.left = invertTree(node.right)
    node.right = invertTree(temp)
    
    return node
};

var invertTree = function(root) {
    const queue = [root];
    
    while(queue.length){
        const node = queue.shift();
        
        if(node){
          const temp = node?.left 

          queue.push(node.left)
          node.left = node.right

          queue.push(node.right) 
          node.right = temp   
        }
        
    }
    return root
};

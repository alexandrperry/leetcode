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
var minDepth = function(root) {
    if(!root){
        return 0
    }
    const queue = [root];
    let levels = 1
    
    while(queue.length > 0){
        let n = queue.length;

        for(let i = 0; i < new Array(n).length ;i++){
            const node = queue.shift()
            
            if(!node){
                return levels
            }
            
            if(!node.left && !node.right){
                return levels
            }

            if(node.left){
               queue.push(node.left)
            }
            if(node.right){
               queue.push(node.right)
            }
        }

        levels+=1
    }
    
    return levels
};

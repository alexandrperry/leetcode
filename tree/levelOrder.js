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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    
    const res = []
    const queue = [root]
    
    while(queue.length>0){
        const level = []
        const len = queue.length
        
        for(let i = 0; i < len; i++){
            const el = queue.shift();
            level.push(el.val)
            
            if(el.left){
                queue.push(el.left)
            }
            if(el.right){
                queue.push(el.right)
            }
        }
        
       
        res.push(level)
    }

    return res
};

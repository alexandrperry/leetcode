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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = []
    queue.push(root)
    
    const res = []
    
    while(queue.length > 0){
        const n = queue.length
        let levelSum = 0
        for(let i = 0; i < new Array(n).length; i++){
            const node =  queue.shift()
            levelSum += node.val
          
            if(node.left){
               queue.push(node.left)
            }
            if(node.right){
               queue.push(node.right)
            }
           
        } 
        res.push(levelSum/n)
       
    }
    
    return res
};

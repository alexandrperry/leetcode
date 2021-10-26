/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1) return root2
    
    const stack = [[root1,root2]]
    
    while(stack.length > 0){
        const node = stack.pop()
        
        if(node[0] == null || node[1] == null){
            continue
        }
       
        node[0].val += node[1].val;
        
        if(node[0].left == null){
            node[0].left = node[1].left
        }
        else{
            stack.push([node[0].left,node[1].left])
        }
        
        if(node[0].right == null){
            node[0].right = node[1].right
        }
        else{
            stack.push([node[0].right,node[1].right])
        }

    }
    
    return root1
    
};

var mergeTrees = function(root1, root2) {
    if(!root1){
        return root2
    }
    
    if(!root2){
        return root1
    }
    
    root1.val += root2.val
    
    root1.left = mergeTrees(root1.left,root2.left)
    root1.right = mergeTrees(root1.right,root2.right)
    
    return root1
};

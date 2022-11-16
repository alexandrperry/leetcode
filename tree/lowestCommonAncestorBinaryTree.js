/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

let res;

var lowestCommonAncestor = function(root, p, q) {
    
    findLCA(root,p,q)
    return res
    
};

const findLCA = (root, p, q) => {
    if(root === null) return false
    const left = findLCA(root.left,p,q)
    const right = findLCA(root.right,p,q)
    
    const curr = root === p || root === q
    if((left && right) || (left && curr) || (right && curr)){
        res = root
    }
    
    return left || right || curr
}

// better for understanding 
var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(p.val > root.val && q.val > root.val){
            root = root.right
        }
        
        else if(p.val < root.val && q.val < root.val){
            root = root.left
        }
        else{
            return root
        }
    }
};

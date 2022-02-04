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
 * @return {boolean}
 */

const symmetricChecker = (leftSubTree,rightSubTree) => {
    if(!leftSubTree && !rightSubTree){
        return true
    }
    
    if(leftSubTree && rightSubTree){
         return leftSubTree.val === rightSubTree.val && symmetricChecker(leftSubTree.left,rightSubTree.right) && symmetricChecker(leftSubTree.right,rightSubTree.left)
    }
    
    return false
}

var isSymmetric = function(root) {
    if(!root){
        return true
    }
    
    return symmetricChecker(root.left, root.right)
};

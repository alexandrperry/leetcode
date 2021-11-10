/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return node
    
    const queue = [node]
    
    const hashMap = new Map()
    hashMap.set(node,new Node(node.val))
    
    while(queue.length){
        const node = queue.shift()
        const clonedNode = hashMap.get(node)
        
        if(node.neighbors?.length){
            node.neighbors.forEach((el) =>{
                if(!hashMap.has(el)){
                    queue.push(el)
                    hashMap.set(el, new Node(el.val))
                }
            
                hashMap.get(node).neighbors.push(hashMap.get(el))
            })
        }
    }

    return hashMap.get(node)
};

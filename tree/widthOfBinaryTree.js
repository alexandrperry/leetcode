var widthOfBinaryTree = function(root) {
    if(!root) {
        return 0;
    }
    const queue = [[root, 0]];
    let maxWidth = 0, l = 0, r = 0;
    while(queue.length) {
        const size = queue.length;
        const startIdx = queue[0][1];
        for(let i = 0; i < size; ++i) {
            const [node, idx] = queue.shift();
            if(i === 0) {
                l = idx;
            }
            if(i === size - 1) {
                r = idx;
            }
			const subIdx = idx - startIdx;
            if(node.left !== null) {
                queue.push([node.left, 2 * subIdx + 1]);
            }
            if(node.right !== null) {
                queue.push([node.right, 2 * subIdx + 2]);
            }
        }
        maxWidth = Math.max(maxWidth, r - l + 1);
    }
    return maxWidth;
};

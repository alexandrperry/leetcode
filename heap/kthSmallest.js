var kthSmallest = function(matrix, k) {
  const heap = new MinHeap();

  for (let i = 0; i < matrix.length; i++){
      for(let j = 0; j< matrix[i].length; j++){
          heap.insert(matrix[i][j])
      }
  }
    
  const result = [];
	for (let i = 0; i < k; i++) {
		result.push(heap.removeMin());
	}
  
	return result[result.length-1]  
};

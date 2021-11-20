/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const charMap = {}
    
    tasks.forEach((task) => {
        charMap[task] ? charMap[task] = charMap[task] + 1 : charMap[task] = 1
    })
    
    const heap = new MaxHeap()
    Object.values(charMap).forEach(char => heap.insert(char))
    let cycles = 0
    
    while(!heap.isEmpty()){
        const res = []
        for(let i = 0; i < n + 1; i++){
            if(!heap.isEmpty()){
                res.push(heap.remove())
            }
        }
        
        res.forEach(i => {
            if(--i > 0){
                heap.insert(i)
            }
        })
        
        cycles += heap.isEmpty() ? res.length : n + 1
    }
    
    
    return cycles
};



let MaxHeap = function() {
	
	let heap = [null];
    
    this.isEmpty = () => heap.length < 2
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};




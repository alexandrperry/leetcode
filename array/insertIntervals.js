/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const results = [];
    
    for(let i = 0; i < intervals.length; i++){
        const interval = intervals[i]
        // overlap
        if(Math.max(interval[0],newInterval[0]) <= Math.min(interval[1],newInterval[1])){
            newInterval = [Math.min(interval[0],newInterval[0]), Math.max(interval[1],newInterval[1])];
        }
        else{
            //lower
            if(interval[0] > newInterval[1]){
                results.push(newInterval, ...intervals.slice(i))
                return results
            }else{
              results.push(interval)
            }
        }
        
        
        
    }

    results.push(newInterval);
    return results
};

//binary search better 

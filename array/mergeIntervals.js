/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1){
        return intervals;
    }
    
    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    const res = []
    let currentInteval = intervals[0]
    res.push(currentInteval);
    
    intervals.forEach(interval => {
        const [currentStart,currentEnd] = currentInteval;
        const [nextStart,nextEnd] = interval;
        
        if(currentEnd>= nextStart){
            currentInteval[1] = Math.max(currentEnd,nextEnd)
        }
        else{
            currentInteval = interval;
            res.push(currentInteval)
        }
    })
    
    return res
};

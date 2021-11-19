var intervalIntersection = function(firstList, secondList) {
    let i = 0;
    let j = 0;
    
    const res = []
    
    while(i < firstList.length && j < secondList.length){
        const start = Math.max(firstList[i][0],secondList[j][0])
        const end = Math.min(firstList[i][1],secondList[j][1])
        
        if(start<=end){
            res.push([start,end])
        }
        
        if(firstList[i][1]<secondList[j][1]){
            i++
        }else{
            j++
        }
    }
    
    return res
};

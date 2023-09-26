function maxArea(height: number[]): number {
    let maxWater = 0;

    for (let i = 0; i < height.length; i++){
        for(let j = 0 + i; j < height.length; j++){
            let water = (j - i) * Math.min(height[i], height[j])
            maxWater = Math.max(water, maxWater)
        }
    }

    return maxWater
};

function maxArea(height: number[]): number {
    let maxWater = 0;

    let l = 0, r = height.length - 1;

    while (l < r){
        let water = (r - l) * Math.min(height[l], height[r])
        maxWater = Math.max(water, maxWater)

        if(height[l] < height[r]){
            l += 1
        }else{
            r -= 1
        }
    } 

    return maxWater
};

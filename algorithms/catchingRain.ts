// O(N^2)
function trap(height: number[]): number {
    let totalCapacity = 0;
    for (let i = 0; i < height.length; i++) {
        let leftMaxHeight = 0;
        for (let j = 0; j < i; j++) {
            leftMaxHeight = Math.max(leftMaxHeight, height[j]);
        }
        let rightMaxHeight = 0;
        for (let j = i+1; j < height.length; j++) {
            rightMaxHeight = Math.max(rightMaxHeight, height[j]);
        }
        let containerHeight = Math.min(leftMaxHeight, rightMaxHeight)
        totalCapacity += containerHeight - height[i] > 0 ? 
                            containerHeight - height[i] : 0
    }
    return totalCapacity;
}

// // O(N) - Two Pointer
function trap2P(height: number[]): number {
    let totalCapacity = 0;
    let n = height.length
    let left = 0;
    let right = n-1;
    let leftMax = height[left];
    let rightMax = height[right];
    while (left < right) {
        if (leftMax > rightMax) {
            right--
            // if the new position of the right pointer doesnt find a new rightMax, leftMax must still be more than rightMax.
            // water held is based on the minimum of leftMax and rightMax. Therefore, water held is equal to the difference in current height and rightMax.
            height[right] > rightMax ?
                rightMax = height[right] : totalCapacity += rightMax - height[right];
        } else {
            left++
            // if the new position of the left pointer doesnt find a new leftMax, rightMax must still be more than leftMax.
            // water held is based on the minimum of leftMax and rightMax. Therefore, water held is equal to the difference in current height and leftMax.
            height[left] > leftMax ? 
                leftMax = height[left] : totalCapacity += leftMax - height[left];;
        }
    }
    return totalCapacity;
}

const input1 = [0,1,0,2,1,0,1,3,2,1,2,1];
const input2 = [10,0,0,0,1,0,5,1];
console.log(trap(input1))
console.log(trap(input2))
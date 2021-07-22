// using multiple pointers - returns the indices of the sorted array - wrong
// function twoSum(nums: number[], target: number): number[] | null { 
//     nums = nums.sort((a, b) => {
//         return a - b
//     })
//     let i = 0;
//     let j = nums.length - 1;
//     while (i < j) {
//         let sum = nums[i] + nums[j];
//         if (sum === target) {
//             return [i, j];
//         } else if (sum < target) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return null;
// };

// O(N^2)
// function twoSum(nums: number[], target: number): number[] | null { 
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j];
//             if (sum === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return null;
// };

// using hash map
function twoSum(nums: number[], target: number): number[] | null { 
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // set key as the number, and value as the index
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        let desired = target - nums[i]
        if (map.get(desired) && map.get(desired) !== i) {
            return [i, map.get(desired)]
        }
    }
    return null;
};



const nums = [2,5,5,11]

const target = 10;

console.log(twoSum(nums, target));
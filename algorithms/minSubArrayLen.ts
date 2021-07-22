// O(N^2)
// function minSubArrayLen(nums: number[], minTarget: number) {
//     let minLen: number = Infinity; // set to infinity so Math.min works later
//     for (let i = 0; i < nums.length; i++) {
//         let subArraySum = 0;
//         subArraySum += nums[i];
//         let subArrayLen = 1;
//         let j = i + 1;
//         if (subArraySum >= minTarget) {
//             minLen = Math.min(minLen, subArrayLen);
//             break;
//         } else {
//             while (j < nums.length) {
//                 if (minLen === subArrayLen) break;
//                 subArraySum += nums[j];
//                 subArrayLen += 1;
//                 if (subArraySum >= minTarget) {
//                     minLen = Math.min(minLen, subArrayLen);
//                     break;
//                 } else {
//                     j++;
//                 }
//             }
//         }
//     }
//     return (minLen < Infinity) ? 
//                 minLen : 0;
// }

// sliding window - O(N)
function minSubArrayLen(nums: number[], minTarget: number) {
    if (nums[0] >= minTarget) return 1;
    let minLen = Infinity;
    let front = 1;
    let back = 0;
    let len = 2;
    let sum = nums[front] + nums[back];
    while (back < nums.length) {
        if (sum >= minTarget) {
            minLen = Math.min(len, minLen);
            if (minLen === 1) return minLen;
            sum -= nums[back];
            len -= 1;
            back++;
        } else {
            front++;
            sum += nums[front];
            len += 1;
        }
        if (front === nums.length - 1 && sum < minTarget) break;
    }
    return (minLen < Infinity) ? minLen : 0;
}

// const ans = minSubArrayLen([1,4,16,22,5,7,8,9,10], 95);
const ans = minSubArrayLen([1,4,16,22,5,7,8,9,10], 39); 
console.log(ans);
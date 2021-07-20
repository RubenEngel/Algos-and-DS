// function maxSubarraySum(numArray: number[], subArrayLength: number){
//     if (numArray.length < subArrayLength) return null;
//     let i = 0;
//     let j = subArrayLength;
//     let maxSum = 0;
//     let maxSubArray: number[] = [];
//     while (j < numArray.length) {
//         let subArray = numArray.slice(i,j);
//         let subArraySum = subArray.reduce((prevSum, currValue) => (prevSum + currValue), 0);
//         if (subArraySum > maxSum) {
//             maxSum = subArraySum;
//             maxSubArray = subArray;
//         }
//         i++;
//         j++;
//     }
//     return [maxSubArray, maxSum];
// }

function maxSubarraySum(numArray: number[], subArrayLength: number){
    let tempSum = 0;
    for (let i = 0; i < subArrayLength; i++) {
        tempSum += numArray[i];
    }
    let maxSum = -Infinity;
    for (let i = subArrayLength; i < numArray.length; i++) {
        tempSum = tempSum + numArray[i] - numArray[i - subArrayLength];
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum;
}

const numArray = [1,5,8,4,2,8,0,3,21,6,8,84,2,2,1,4];
const subArrayLength = 4;

const ans = maxSubarraySum(numArray, subArrayLength);

console.log(ans);
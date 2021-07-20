// Brute Force
// function averagePair(numArray: number[], target: number) {
//     for (let i = 0; i < numArray.length; i++) {
//         let num1 = numArray[i];
//         for (let j = 0; j < numArray.length; j++) {
//             let num2 = numArray[j];
//             if (num2 = 2 * target - num1) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Multiple Pointers
function averagePair(numArray: number[], target: number) {
    if (numArray.length < 2) return false;
    const n = numArray.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        let avg = numArray[left] + numArray[right] / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

const ans = averagePair([1,3,3,5,6,7,10,12,19], 50);
console.log(ans)
// function findLongestSubstring(inputStr) {
//     if (inputStr.length === 0)
//         return 0;
//     var longestLen = 1;
//     var seen = {};
//     var front = 0; // front index of the sliding window
//     var back = 0; // back index of the sliding window
//     var len = 1;
//     seen[inputStr[front]] = true;
//     while (front < inputStr.length - 1) {
//         let nextChar = inputStr[front + 1];
//         let frontChar = inputStr[front];
//         let backChar = inputStr[back];
//         if (!seen[nextChar]) {
//             front++;
//             seen[frontChar] = true;
//             len++;
//             longestLen = Math.max(longestLen, len);
//         }
//         else {
//             while (seen[nextChar]) {
//                 delete seen[backChar];
//                 back++;
//                 len--;
//             }
//         }
//     }
//     return longestLen;
// }

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('bbbbb')); // 1
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('thisishowwedoit')); // 6

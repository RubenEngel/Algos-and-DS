// course solution
// function findLongestSubstring(str: string): number {
//     let longest = 0;
//     let seen: { // stores the index of each seen character
//         [char: string]: number
//     } = {};
//     let start = 0; // start of the substring
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         // sets the start index to where the letter was seen
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, (i - start) + 1);
//       // store the index of the char after the current one; want to go to this char when updating start
//       seen[char] = i + 1;
//     }
//     return longest;
//   }

function findLongestSubstring(inputStr: string): number {
    if (inputStr.length === 0) return 0;
    let longestLen = 1;
    let seen = {} as { // object to store which letters we have
        [letter: string]: boolean
    };
    let front = 0;
    let back = 0;
    let len = 1;
    seen[inputStr[front]] = true;
    while (front < inputStr.length - 1) {
        if (!seen[ inputStr[front + 1]]) {
            front++;
            seen[inputStr[front]] = true;
            len++;
            longestLen = Math.max(longestLen, len);
        } else {
            while (seen[inputStr[front + 1]]) {
                delete seen[inputStr[back]]
                back++;
                len--;
            }
        }
    }
    return longestLen;
}

console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('bbbbb')); // 1
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('thisishowwedoit')); // 6
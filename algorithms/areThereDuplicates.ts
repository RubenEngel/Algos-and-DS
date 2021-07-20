function areThereDuplicates(...args: Array<string | number>) {
    type KeyType = string | number;
    const seen = {} as {[key in KeyType]: boolean};
    for (let arg of arguments) {
        if (seen[arg]) {
            return true;
        } else {
            seen[arg] = true;
        }
    }
    return false;
}

// Multiple Pointers - JS
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

console.log( areThereDuplicates('hello', 6, 'no', 5) )
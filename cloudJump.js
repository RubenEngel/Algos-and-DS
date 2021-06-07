function jumpingOnClouds(arr) {
    let currentIndex = 0;
    let jumps = 0
    while (currentIndex < arr.length - 1) {
        if (arr[currentIndex + 2] === 0) {
            currentIndex += 2
            jumps += 1
        } else if (arr[currentIndex + 1] === 0) {
            currentIndex += 1
            jumps += 1
        } else {
            break
        }
    }
    return jumps;
} 

let input = [0,0,0,0,1,0,1];
let output = jumpingOnClouds(input);
console.log(output);
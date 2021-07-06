// function validAnagram(str1, str2) {
//     if (str1.length != str2.length) {
//         return false;
//     }
//     let obj1 = {};
//     let obj2  =  {};
//     for (let char of str1) {
//         obj1[char] = obj1[char] ? ++obj1[char] : 1;
//     }
//     for (let char of str2) {
//         obj2[char] = obj2[char] ? ++obj2[char] : 1;
//     }
//     console.log(obj1,obj2)
//     for (let char of str1) {
//         if (!obj2[char] || (obj1[char] != obj2[char])) {
//             return false;
//         }

//     }
//     return true;
// }

function validAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let lookup = {};
    for (let char of str1) {
        lookup[char] = lookup[char] ? ++lookup[char] : 1;
    }
    for (let char of str2) {
        if (!lookup[char]) {
            return false;
        } else {
            // when a value in an object is 0, it will return false when it is searched for so need to -1
            lookup[char] -= 1;
        }
    }
    return true;
}

input1 = "anagram";
input2 = "nagaram";

console.log(validAnagram(input1, input2));
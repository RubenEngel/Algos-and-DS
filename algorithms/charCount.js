// function charCount(str) {
//     var result = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase()
//         if (result[char]>0) {
//             result[char]++;
//         }
//         else {
//             result[char]=1;
//         }
//     }
//     return result
// }

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         var char = char.toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// this is faster than using RegExp
// function isAlphaNumeric(char) {
//     var code = char.charCodeAt(0)
//     if ((code > 47 && code < 58) ||
//         (code > 64 && code < 91) ||
//         (code > 96 && code < 123)) {
//             return true;
//         }
//     return false;
// }

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         if (isAlphaNumeric(char)) {
//             var char = char.toLowerCase()
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         if (isAlphaNumeric(char)) {
//             var char = char.toLowerCase()
//             obj[char] = (obj[char] || 0) + 1;
//         }
//     }
//     return obj;
// }

function charCount(str) {
    var obj = {};
    for (var char of str) {
        var char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            obj[char] = obj[char] ? ++obj[char] : 1
        }
    }
    return obj;
}

input = "Hello, testing, testing 123"
output = charCount(input)
console.log(output)
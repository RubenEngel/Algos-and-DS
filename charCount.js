function charCount(str) {
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        if (result[char]>0) {
            result[char]++;
        }
        else {
            result[char]=1;
        }
    }
    return result
}

input = "Hello, testing, testing 123"
output = charCount(input)
console.log(output)
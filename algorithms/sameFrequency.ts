function sameFrequency(num1: number | string, num2: number | string) {

    num1 = num1.toString() as string;
    num2 = num2.toString() as string;

    if (num1.length !== num2.length) return false;

    const num1Freq = {} as {[char: string]: number};
    const num2Freq = {} as {[char: string]: number};

    for (let char of num1) {
        num1Freq[char] ?
            num1Freq[char] += 1 : num1Freq[char] = 1;
    }
    for (let char of num2) {
        num2Freq[char] ?
            num2Freq[char] += 1 : num2Freq[char] = 1;
    }
    for (let key in num1Freq) {
        if (num1Freq[key] !== num2Freq[key]) {
            return false;
        }
    }
    return true;
}

let num1 = 234;
let num2 = 423;

console.log(sameFrequency(num1, num2))
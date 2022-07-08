function findSubstring(s: string, words: string[]): number[] {
  if (words.join("").length > s.length) {
    return [];
  }
  if (words.length === 0) {
    return [];
  }
  // store word and index found at
  type RequiredWordCount = {
    [word: string]: number;
  };
  const requiredWordCount: RequiredWordCount = words.reduce((acc, word) => {
    return {
      ...acc,
      [word]: (acc[word] || 0) + 1,
    };
  }, {} as RequiredWordCount);

  let foundWords: {
    [word: string]: number[];
  } = {};

  const wordLength = words[0].length;
  const allSubstringIndices = [];

  let left = 0;
  let tempWord = "";
  let tempWordLeft = 0;

  for (let right = 0; right < s.length + 1; right++) {
    if (right - tempWordLeft > wordLength) {
      tempWordLeft++;
      left = tempWordLeft;
      foundWords = {};
    }
    tempWord = s.slice(tempWordLeft, right);
    if (!(tempWord.length === wordLength)) {
      continue;
    }
    if (words.includes(tempWord)) {
      if (foundWords[tempWord]) {
        foundWords[tempWord] = foundWords[tempWord].filter((el) => el > left);
        if (foundWords[tempWord].length === requiredWordCount[tempWord]) {
          left = (foundWords[tempWord].pop() as number) + wordLength;
        }
      }
      foundWords[tempWord]
        ? foundWords[tempWord].unshift(tempWordLeft)
        : (foundWords[tempWord] = [tempWordLeft]);
      tempWordLeft = right;
      if (Object.values(foundWords).flat().length === words.length) {
        allSubstringIndices.push(left);
      }
    } else {
      tempWordLeft = right;
      left = tempWordLeft;
      foundWords = {};
    }
  }
  return allSubstringIndices;
}

const testWords = {
  a: ["cat", "hat", "sat", "fat", "axe", "far"],
  b: ["word", "good", "best", "word"],
  c: ["bar", "foo", "the"],
  d: ["foo", "bar"],
  e: ["bar", "foo", "the"],
};

const testString = {
  a: "abccathatsatfaraxefatwer",
  b: "wordgoodgoodgoodbestword",
  c: "barfoofoobarthefoobarman",
  d: "barfoothefoobarman",
  e: "barfoofoobarthefoobarman",
};

// console.log(findSubstring(testString.a, testWords.a));
// console.log(findSubstring(testString.b, testWords.b));
// console.log(findSubstring(testString.c, testWords.c));
// console.log(findSubstring(testString.d, testWords.d));
console.log(findSubstring(testString.e, testWords.e));

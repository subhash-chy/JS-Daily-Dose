// Question 1s
/*
Write a function to get a extension of a file.
*/
// Input: myFunction("index.html")  // Output: html
// Input: myFunction("virus.exe")   // Output: exe
// Input: myFunction("con.py.rs")   // Output: rs

const getExtension = (fileName) => {
  const splitedFileName = fileName.split(".");
  return splitedFileName[splitedFileName.length - 1];
};

console.log(getExtension("index.html"));
console.log(getExtension("virus.exe"));
console.log(getExtension("con.py.rs"));

// Question 2
// Write a function that takes an argument as string. Replace every character in a given string with the character following it in the alphabet.
// Input: myFunction("abcd")  // Output: bcde
// Input: myFunction("wxyz")  // Output: xyza
// Input: myFunction("defg")  // Output: efgh

const characterReplacer = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let enteredWord = word.split("");

  const result = enteredWord.map((item) => {
    const charIndex = alphabet.indexOf(item);

    return alphabet[charIndex === alphabet.length - 1 ? 0 : charIndex + 1];
  });

  return result.join("");
};

console.log(characterReplacer("abcd"));
console.log(characterReplacer("wxyz"));
console.log(characterReplacer("defg"));

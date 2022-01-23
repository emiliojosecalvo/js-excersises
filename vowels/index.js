// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}


module.exports = vowels;

//first solution
// function vowels(str) {
//     let res = 0;
//     //characters that we wanna check if they are in the string
//     let check = ['a', 'e', 'i', 'o', 'u'];

//     for (let c of str.toLowerCase()) {
//         //check using includes if the current character is in the string
//         if (check.includes(c)) {
//             res++;
//         }
//     }
//     return res;// return the amount of characters found
// }

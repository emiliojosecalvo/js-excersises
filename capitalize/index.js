// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();// create a string with the first letter already capitalize

    for (let i = 1; i - str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();//if the character on the left is a empty string the current character will be uppercased
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;

//First Solution
// function capitalize(str) {
//     const words = [];//empty array to return
//     let splitStr = str.split(' ');//create an array of words separated by 'space'
//     //we itirate all elements in the array
//     for (let w of splitStr) {
//         words.push(
//             w[0].toUpperCase()//Uppercase the first letter of each array
//             + w.slice(1)//gets all the letters from the word except the first one
//         )
//     }
//     return words.join(' ');//return all elements join together as a full strings with 'spaces' between then
// }

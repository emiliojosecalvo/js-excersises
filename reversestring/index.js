// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}


reverse('hola');

module.exports = reverse;

//Second Solution
// function reverse(str) {
//     let reverse = '';

//     for (let character of str) {
//         reverse = character + reverse;
//     }
//     return reverse;
// }

//First Solution
// function reverse(str) {
//     //first we split the str into an array
//     let array = str.split('');
//     //here we reverse all positions from the array
//     array.reverse('');
//     //here we join them as a single string
//     return array.join('');
// }

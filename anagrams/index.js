// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);// compare if both strings are the same to return either true or false
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')//clean the string keeping just a - z and  0 - 9
        .toLowerCase() //Lowecase the string
        .split('')//Divide the strings into separate list of substrings
        .sort()//organize this strings in alphabetical or numerical order
        .join('');//Joing all the substrings as a single string
}
function sum(nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let x = 0; x < nums.length; x++) {
            if (nums[i] + nums[x] === target) {
                res.push(i, x)
                return res;
            }
        }
    }
}

sum([2, 7, 11, 15], 9)
sum([3, 2, 4], 6)

function twoSum(arr, target) {
    for (let i = 0, j = arr.length - 1; i < j;) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            return [i, j];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
};

module.exports = anagrams;

//First Solution
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }
//     for (let c in aCharMap) {
//         if (aCharMap[c] !== bCharMap[c]) {
//             return false;
//         }
//     }
//     return true;
// }


// function buildCharMap(str) {
//     //Empty object to create the new one
//     const charMap = {};
//     //Clean the string from empty spaces and others characters outside of a-z or 0-9
//     const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();

//     for (let c of cleanStr) {
//         //sum 1 to existing key or assign one if didnt existed
//         charMap[c] = charMap[c] + 1 || 1;
//     }

//     return charMap;
// }

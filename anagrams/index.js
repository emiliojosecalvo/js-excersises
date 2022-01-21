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
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    for (let c in aCharMap) {
        if (aCharMap[c] !== bCharMap[c]) {
            return false;
        }
    }
    return true;
}


function buildCharMap(str) {
    //Empty object to create the new one
    const charMap = {};
    //Clean the string from empty spaces and others characters outside of a-z or 0-9
    const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();

    for (let c of cleanStr) {
        //sum 1 to existing key or assign one if didnt existed
        charMap[c] = charMap[c] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;
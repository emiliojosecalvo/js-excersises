// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //this array will hold all the chunks from the previous array
    let newArr = [];
    let index = 0;

    while (index < array.length) {
        //Cut a slice of the original array following the index and the size as a parameters
        newArr.push(array.slice(index, index + size))
        //increase the number of the index so we don push twice the same array
        index = index + size;
    }
    return newArr;
}

module.exports = chunk;

//First Solution
// function chunk(array, size) {
//     //this array will hold all the chunks from the previous array
//     let newArr = [];

//     for (let n of array) {
//         //Last will be use to either see if we have a last array or to add elements to that array
//         const last = newArr[newArr.length - 1];
//         if (!last || last.length === size) {
//             //if we dont have any array or we have too many elements in the current array we will push a new array
//             newArr.push([n]);
//         } else {
//             //If not we will push the element into the current array
//             last.push(n);
//         }
//     }
//     return newArr;
// }

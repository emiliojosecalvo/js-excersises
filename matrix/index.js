// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];

    //push empty arrays inside the result
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let counter = 1;//our counter to give the numbers to be push
    let startCol = 0;
    let endCol = n - 1;//it gives the number of columns that we will need
    let startRow = 0;
    let endRow = n - 1;//it gives the number of rows that we will need

    while (startCol <= endCol && startRow <= endRow) {

        //top line
        for (let i = startCol; i < endCol + 1; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //right side
        for (let i = startRow; i < endRow + 1; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        //bottom line
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //left side
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    console.log(result.length)
}

matrix(4)

module.exports = matrix;

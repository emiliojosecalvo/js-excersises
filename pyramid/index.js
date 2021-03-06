// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let mid = Math.floor((2 * n - 1) / 2);//get the mid point dividing the number of columns mid = 2

    for (let r = 0; r < n; r++) {
        let line = '';
        for (let c = 0; c < 2 * n - 1; c++) {
            //check using the mid as a refence, check depending of the row (r) if the column will get a # 
            if (mid - r <= c && mid + r >= c) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}


module.exports = pyramid;

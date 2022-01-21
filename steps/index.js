// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    let steps = '';

    for (let r = 0; r < n; r++) {
        steps = '';
        for (let c = 0; c < n; c++) {
            if (c <= r) {
                steps += '#';
            } else {
                steps += ' ';
            }
        }
        console.log(steps);
    }
}

module.exports = steps;

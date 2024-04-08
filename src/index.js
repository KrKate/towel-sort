
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length < 1) return [];
  let sortedList = [];
  matrix.forEach((row, index) => {
    if (index % 2 === 0) {
      sortedList.push(...row);
    } else {
      sortedList.push(...row.reverse());
    }
  })
  return sortedList;
}

const towelSort = require('./index.js');

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(towelSort(matrix));
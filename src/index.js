
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let finalArr = [];
  console.log(matrix);
  if (!matrix) {
    return finalArr;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      finalArr.push(matrix[i]);
      // console.log(finalArr);
      
    } else {
      finalArr.push(matrix[i].sort(function(a, b) { return b - a; }));
    }
  }
  return finalArr.flat();
}

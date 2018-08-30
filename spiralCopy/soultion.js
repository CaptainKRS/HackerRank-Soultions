function spiralCopy(matrix) {
  let outputArr = [];
  let xStart = 0;
  let yStart = 0;
  let xEnd = matrix[0].length - 1;
  let yEnd = matrix.length - 1;
  // @arrPasses - when we strip the outter most shell and when we need to make another pass use this variable to
  // caculate how many passes we will have to make exp.  5 / 2 = 2.5 round up to 3 and you make 3 passes in a 5x5
  // 2d Array
  let arrPasses = Math.round(matrix.length / 2);

  if (matrix.length == 1) {
    matrix[0].forEach(num => {
      outputArr.push(num);
    });
    return outputArr;
  } else {
    while (arrPasses) {
      //we go across
      for (var i = xStart; i < xEnd; i++) {
        outputArr.push(matrix[xStart][i]);
      }
      //we go down
      for (var j = yStart; j < yEnd; j++) {
        outputArr.push(matrix[j][xEnd]);
      }
      //we go bottom to far left
      for (var k = xEnd; k > xStart; k--) {
        outputArr.push(matrix[yEnd][k]);
      }
      //we go up from bottom right to top
      for (var h = yEnd; h > yStart; h--) {
        outputArr.push(matrix[h][xStart]);
      }
      arrPasses--;
      xStart++;
      xEnd--;
      yStart++;
      yEnd--;
    }
  }
  return outputArr;
}

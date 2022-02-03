/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let result = [];
  for (let i=0; i<n; i++) {
    if (!i) {
      result.push([1]);
    } else {
      let subarray = [];
      for (let j=0; j<i+1; j++) {
        let tempCount = 0;
        if (result[i-1][j-1]) {
          tempCount += Number(result[i-1][j-1]);
        }
        if (result[i-1][j]) {
          tempCount += Number(result[i-1][j]);
        }
        subarray.push(tempCount)
      }
      result.push(subarray);
    }
  }
  return result;
};
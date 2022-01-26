/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
   let result = [];
   for (var i=0; i<input.length; i++) {
       let tempSum = 0;
       for (var j=0; j<=0; j++) {
           tempSum += input[j];
       }
    result.push(tempSum);
   }
   return result;
};

let myinput = prompt();
return runningSum(myinput);
/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   input = input.sort((a,b) => a-b);
   let max = input[input.length-1];
   for (let i=0; i<input.length-1; i++) {
           if (input[i]*2>max) {
                   return false;
           }
   }
   return true;
};
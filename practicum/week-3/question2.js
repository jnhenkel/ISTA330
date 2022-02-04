
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
	let result = [];
    let max = 0;
    
	for (let i=0; i<input.length; i++) {
		for (let j = i; j<input.length; j++) {
			let sum = input.slice(i,j+1).reduce((total, n) => total+n);
			if (sum>max) {
				max = sum;
			}
		}
		
	}
	return max;
 };
console.log(largestSubarray([-12,3,-1,5,-2,1,-7]));
console.log(largestSubarray([-17,3,1,5,-9,-1,10]));
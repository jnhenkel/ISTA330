
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
    for (let el of input) {
		if (el>max) {
			max = el;
		}
    }
	for (let i=2; i<input.length; i++) {
		let j = 0;
		
	}
 };

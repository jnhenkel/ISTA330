/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    let numCount = {};
    let result = [];
    for (let el of input) {
        if (el in numCount) {
            numCount[el]++;
        } else {
            numCount[el] = 1;
        }
    }
    for (let key in numCount) {
        if (numCount[key] == key) {
            result.push(Number(key));
        }
    }
    if (result.length) {
        return result.sort((a,b) => b-a)[0];
    }
    return -1;
};
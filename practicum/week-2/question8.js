/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let result = [];
    for (let i=0; i<input.length; i++) {
        let tempSum = 0;
        let num = input[i];
        let tempArray = input.map((x) => x); /*copy not reference*/
        tempArray.splice(i,1); /*removes 1 element at position i*/
        for (let el of tempArray) {
            if (el>num && el%2==0){
                tempSum++;
            }
        }
        result.push(tempSum);
    }
    return result;
};
/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let result = {};
    for (let i=1; i<=n; i++) {
        let nToArray = String(i).split('');
        let tempSum = 0;
        for (let el of nToArray) {
            tempSum += Number(el);
        }
        if (tempSum in result) {
            result[tempSum].push(i);
        } else {
            result[tempSum] = [i];
        }
    }
    let maxLenArray = 0;
    for (let key in result) {
        if (result[key].length > maxLenArray) {
            maxLenArray = result[key].length;
        }
    }
    let finalCount = 0;
    for (let key in result) {
        if (result[key].length == maxLenArray) {
            finalCount++;
        }
    }
    return finalCount;
};

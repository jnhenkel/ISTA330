/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let m = input.length / 2;
    let numCounter = {};
    for (let el of input) {
        if (el in numCounter) {
            numCounter[el]++;
        } else {
            numCounter[el] = 1;
        }
    }
    for (key in numCounter) {
        if (numCounter[key] > m) {
            return Number(key);
        }
    }
    return -1;
};
/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let max = 0; /*smallest digit possible*/ 
    let min = 9; /*largest digit possible*/ 
    let stringedInt = n.toString();
    for (let el of stringedInt) {
        if (el > max) {
            max = el;
        } else if (el < min) {
            min = el;
        }
    }
    return max-min;
};  
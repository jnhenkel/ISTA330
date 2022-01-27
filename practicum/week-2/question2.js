
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        let max = 0;/*find maximum in given array*/
        for (let el of cookies) { 
                if (el>max) {
                        max = el;
                }
        }
        let remainingCookies = extraCookies;
        for (let i=0; i<cookies.length; i++) {
                if (cookies[i]<max) { 
                        let difference = max - cookies[i];
                        remainingCookies -= difference;
                        cookies[i] = max;
                }
        }
        let fullCookies = false; /*determine if all elements have cookies equal to maximum*/
        let totalElements = cookies.length;
        let totalElementsFull = 0;
        for (let el of cookies) {
                if (el==max) {
                        totalElementsFull +=1;
                }
        }
        if (totalElementsFull == totalElements) {
                fullCookies = true;
        }
        /*final logic to return true or false*/
        if (remainingCookies==0 && fullCookies) {
                return true;
        }
        return false;
 };

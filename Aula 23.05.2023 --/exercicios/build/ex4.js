"use strict";
function compareTwoNumbers(num1, num2) {
    let greaterNumber;
    let smallerNumber;
    if (num1 > num2) {
        greaterNumber = num1;
        smallerNumber = num2;
    }
    else {
        greaterNumber = num2;
        smallerNumber = num1;
    }
    const diference = greaterNumber - smallerNumber;
    return diference;
}
const result = compareTwoNumbers(5, 10);
console.log(result);
//# sourceMappingURL=ex4.js.map
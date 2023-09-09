"use strict";
function checkTriangle(a, b, c) {
    if (a !== b && b !== c) {
        return "Scalene";
    }
    else if (a == b && b === c) {
        return "Equilateral";
    }
    else {
        return "Isosceles";
    }
}
const result2 = checkTriangle(5, 2, 3);
console.log(result2);
//# sourceMappingURL=ex1.js.map
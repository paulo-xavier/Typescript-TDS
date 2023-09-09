"use strict";
function checkLeapYear(year) {
    const cond1 = year % 400 === 0;
    const cond2 = (year % 4 === 0) && (year % 100 !== 0);
    return cond1 || cond2;
}
const resultado = checkLeapYear(2023);
console.log(resultado);
//# sourceMappingURL=ex3.js.map
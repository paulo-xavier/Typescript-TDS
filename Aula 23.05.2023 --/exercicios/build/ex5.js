"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const leitor = __importStar(require("readline-sync"));
function checkRenewRG() {
    const currentYear = leitor.questionInt("Input the current year:");
    const birthYear = leitor.questionInt("Input yuour birth year:");
    const emissionYear = leitor.questionInt("Input the emission year of the document: ");
    const age = currentYear - birthYear;
    const timeWork = currentYear - emissionYear;
    const cond1 = age <= 20 && timeWork >= 5;
    const cond2 = age > 20 && age <= 50 && timeWork >= 10;
    const cond3 = age > 50 && timeWork >= 15;
    return (cond1 || cond2 || cond3);
}
const result = checkRenewRG();
console.log(result);
//# sourceMappingURL=ex5.js.map
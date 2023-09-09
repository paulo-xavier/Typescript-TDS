"use strict";
function RNAConverter(DNA) {
    let RNA = "";
    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] === "A") {
            RNA = RNA + "U";
        }
        else if (DNA[i] === "T") {
            RNA = RNA + "A";
        }
        else if (DNA[i] === "C") {
            RNA = RNA + "G";
        }
        else if (DNA[i] === "G") {
            RNA = RNA + "C";
        }
    }
    console.log(RNA);
}
RNAConverter("ATTGCTGCGCATTAACGACGCGTA");
//# sourceMappingURL=ex7.js.map
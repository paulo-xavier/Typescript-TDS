/*

7
Uma das definições de seres vivos implica em identificar se ele possui células ou não. Hoje em dia, sabe-se que as características deles ficam salvas dentro de uma molécula, um tanto quanto grande, chamada de DNA (Ácido Desoxirribonucleico). Uma das tarefas mais importantes para a sobrevivência das células é a transcrição do RNA (Ácido Ribonucleico) a partir de um DNA. Este processo consiste em identificar as bases nitrogenadas que formam o DNA, em questão. Todas as moléculas de DNA podem ser representadas como uma sequência de bases nitrogenadas que podem ser: a A (adenina), T (timina), G (guanina) ou C (citosina). Abaixo, há um exemplo disto.

Para se formar o RNA, devemos realizar a troca das bases nitrogenadas, seguindo a regra: A (adenina) vira U (uracila - específica do RNA); T (timina) vira Adenina (A), C (citosina) vira G(guanina); e G (guanina) vira C (citosina).  O RNA transcrito a partir do exemplo de DNA acima é:

a) Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria "ATTGCTGCGCATTAACGACGCGTA" e a saída "UAACGACGCGUAAUUGCUGCGCAU".


*/

function RNAConverter(DNA:string):void{

    let RNA:string = ""

    for (let i=0; i < DNA.length; i++ ){

        if(DNA[i] === "A"){
            RNA = RNA + "U"
        
        } else if (DNA [i] === "T"){
            RNA = RNA + "A"
        
        } else if (DNA [i] === "C"){
            RNA = RNA + "G"
        
        }else if (DNA[i] === "G"){
            RNA = RNA + "C"
        }


    }


    console.log(RNA)
}


RNAConverter("ATTGCTGCGCATTAACGACGCGTA")
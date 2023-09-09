/*

- **#6 Grenais**
    
    A Federação Gaúcha de Futebol contratou você para escrever um programa para fazer uma estatística do resultado de vários GRENAIS. Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um GRENAL. Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta. Se a resposta for 1, o algoritmo deve ser executado novamente solicitando o número de gols marcados pelos times em uma nova partida, caso contrário deve ser encerrado imprimindo:
   
- Quantos GRENAIS fizeram parte da estatística.
- O número de vitórias do Inter.
- O número de vitórias do Grêmio.
- O número de Empates.
- Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor", caso termine empatado).

**Entrada**

A entrada contém 2 valores inteiros, correspondentes aos gols marcados pelo Inter e pelo Grêmio respectivamente. Em seguida háverá um inteiro (1 ou 2), correspondente à repetição do programa.

Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". Quando o algoritmo for encerrado devem ser mostradas as estatísticas conforme a descrição apresentada acima. Obs: a palavra "Gremio" deve ser impressa sem acento, conforme o exemplo abaixo.

*/

import * as leitor from "readline-sync"
let total:number = 0
let winsInter:number = 0
let winsGremio:number = 0
let draw:number = 0
let anwser:number = 0 



do {
    let inter: number = leitor.questionInt("How many goals inter did? ")
    let gremio: number = leitor.questionInt("How many goals gremio did? ")
    
    total++
    
    if(inter > gremio){
        winsInter++
    } else if (gremio > inter){
        winsGremio++
    } else {
        draw++
    }


    anwser = leitor.questionInt("\n New GRENAL? 1-yes 2-no ")
    console.log("\n")
    

} while (anwser != 2){
    
}


console.log(total, " grenais")
console.log("Inter: ",winsInter)
console.log("Grêmio: ",winsGremio)
console.log("Draws: ",draw)

if(winsInter > winsGremio){
    console.log("Inter won more times than Gremio!")
} else if (winsGremio > winsInter){
    console.log("Gremio won more times than Inter")
} else {
    console.log("The both teams won the same value")
}
console.log("\n")
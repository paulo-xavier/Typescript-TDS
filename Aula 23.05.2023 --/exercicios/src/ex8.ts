/*


Exercício 8
    
    a) Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for `"abcd"`, a saída deve ser `"dcba"` .

*/



function wordReverse(reverse:string){

    return reverse.split("").reverse().join("")

}




const finalWord:String = wordReverse("abcd")
console.log(finalWord)

/* console.log(wordReverse("abcd")) */

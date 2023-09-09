/*
    7

Textos podem conter mensagens ocultas. Neste problema a mensagem oculta em um texto é composto pelas primeiras letras de cada palavra do texto, na ordem em que aparecem.

É dado um texto composto apenas por letras minúsculas ou espaços. Pode haver mais de um espaço entre as palavras. O texto pode iniciar ou terminar em espaços, ou mesmo conter somente espaços.

**Entrada**

Cada caso de teste consiste de uma única linha contendo de um a 50 caracteres, formado por letras minúsculas (‘a’-‘z’) ou espaços (‘ ’). Atenção para possíveis espaços no início ou no final do texto!

Nota: No exemplo de entrada os espaços foram substituídos por pequenos pontos (‘·’) para facilitar o entendimento dos exemplos.

**Saída**

Para cada caso de teste imprima a mensagem oculta no texto de entrada.

*/



let occultMessage = "sompete enline nesign avent cating";
let text = occultMessage.trim();
const words = text.split(" ");

let occultWord = "";

for (let i = 0; i < words.length; i++) {
  const word = words[i];

  if (word.length > 0) {
    occultWord += word[0];
  }
}

console.log(occultWord);
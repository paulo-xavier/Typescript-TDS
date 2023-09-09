/*

Era uma vez um campeão de *WoW*

*Arthasdk* o nome que lhe foi dado

Ele *Death Gripped* você ao seu lado

Suas *Chains of Ice* pararam seu passo

E *Obliterates* fez você dizer "OWW!"

Mas um dia nosso herói ficou intrigado

Seu *Death Grip* fracassou totalmente

Em seu mais escuro desespero

Ele mal conseguia ouvir

”OMG NOOB u *Chains of Iced* então u *Death Gripped*”

**Entrada**

Você recebe uma gravação das habilidades que nosso herói usou em suas batalhas.

A primeira linha de entrada conterá um único inteiro **n** (1 ≤ **n** ≤ 100), o número de batalhas que nosso herói jogou.

Em seguida, siga **n** linhas, cada uma com uma sequência de caracteres **ki** (1 ≤ **ki** ≤ 1000), cada um dos quais sendo 'C', 'D' ou 'O'. Isso denota a sequência de habilidades usadas por nosso herói na **i**-ésima batalha. 'C' é *Chains of Ice*, 'D' é *Death Grip* e 'O' é *Obliterate*.

**Saída**

Imprima o número de batalhas que nosso herói venceu, supondo que ele venceu cada batalha em que não usou *Chains of Ice* imediatamente seguido por *Death Grip*.

*/
var n = 3;
var batalhas = ["COD", "DOD", "COO", "CCCD", "DDDD"];
var batalhasVencidas = 0;
for (var i = 0; i < n; i++) {
    var habilidades = batalhas[i];
    var usedChainsOfIce = false;
    var usedDeathGrip = false;
    for (var j = 0; j < habilidades.length; j++) {
        if (habilidades[j] === "C") {
            usedChainsOfIce = true;
        }
        else if (habilidades[j] === "D") {
            usedDeathGrip = true;
            if (usedChainsOfIce) {
                break; // Derrota imediata se usar Chains of Ice seguido de Death Grip
            }
        }
    }
    if (!usedChainsOfIce || !usedDeathGrip) {
        batalhasVencidas++;
    }
}
console.log(batalhasVencidas);

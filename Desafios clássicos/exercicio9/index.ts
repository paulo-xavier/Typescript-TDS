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

const n: number = 3;
const battles: string[] = ["COD", "DOD", "COO", "CCCD", "DDDD"];

let wonBattles: number = 0;

for (let i: number = 0; i < n; i++) {
  const abilities: string = battles[i];
  let usedChainsOfIce: boolean = false;
  let usedDeathGrip: boolean = false;

  for (let j: number = 0; j < abilities.length; j++) {
    if (abilities[j] === "C") {
      usedChainsOfIce = true;
    } else if (abilities[j] === "D") {
      usedDeathGrip = true;
      if (usedChainsOfIce) {
        break; 
      }
    }
  }

  if (!usedChainsOfIce || !usedDeathGrip) {
    wonBattles++;
  }
}

console.log(wonBattles);
/*
8
Pedrinho está organizando um evento em sua escola. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

**Entrada**

Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato **hh : mm : ss**. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

**Saída**

Na saída, deve ser apresentada a duração do evento, no seguinte formato:

*/

const secondsPerDay = 24 * 60 * 60; // Segundos em um dia
const secondsPerHour = 60 * 60; // Segundos em uma hora
const secondsPerMinute = 60; // Segundos em um minuto

const dayStart = 5;
const hourStart = "09:30:10";
const endDay = 8;
const hourEnd = "12:45:30";

const [hourStartNum, minuteStart, secondStart] = hourStart.split(":").map(Number);
const [hourEndNum, minuteEnd, secondEnd] = hourEnd.split(":").map(Number);

const secondsStart = (dayStart - 1) * secondsPerDay + hourStartNum * secondsPerHour + minuteStart * secondsPerMinute + secondStart;
const secondsEnd= (endDay - 1) * secondsPerDay + hourEndNum * secondsPerHour + minuteEnd * secondsPerMinute + secondEnd;

let secondsDuration = secondsEnd- secondsStart;

const days = Math.floor(secondsDuration / secondsPerDay);
secondsDuration %= secondsPerDay;

const hours = Math.floor(secondsDuration / secondsPerHour);
secondsDuration %= secondsPerHour;

const minutes = Math.floor(secondsDuration / secondsPerMinute);
secondsDuration %= secondsPerMinute;

const seconds = secondsDuration;

console.log(`${days} day(s)`);
console.log(`${hours} hour(s)`);
console.log(`${minutes} minute(s)`);
console.log(`${seconds} second(s)`);
/*
8
Pedrinho está organizando um evento em sua escola. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

**Entrada**

Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato **hh : mm : ss**. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

**Saída**

Na saída, deve ser apresentada a duração do evento, no seguinte formato:

*/
var secondsPerDay = 24 * 60 * 60; // Segundos em um dia
var secondsPerHour = 60 * 60; // Segundos em uma hora
var secondsPerMinute = 60; // Segundos em um minuto
var dayStart = 5;
var hourStart = "09:30:10";
var endDay = 8;
var hourEnd = "12:45:30";
var _a = hourStart.split(":").map(Number), hourStartNum = _a[0], minuteStart = _a[1], secondStart = _a[2];
var _b = hourEnd.split(":").map(Number), hourEndNum = _b[0], minuteEnd = _b[1], secondEnd = _b[2];
var secondsStart = (dayStart - 1) * secondsPerDay + hourStartNum * secondsPerHour + minuteStart * secondsPerMinute + secondStart;
var secondsEnd = (endDay - 1) * secondsPerDay + hourEndNum * secondsPerHour + minuteEnd * secondsPerMinute + secondEnd;
var secondsDuration = secondsEnd - secondsStart;
var days = Math.floor(secondsDuration / secondsPerDay);
secondsDuration %= secondsPerDay;
var hours = Math.floor(secondsDuration / secondsPerHour);
secondsDuration %= secondsPerHour;
var minutes = Math.floor(secondsDuration / secondsPerMinute);
secondsDuration %= secondsPerMinute;
var seconds = secondsDuration;
console.log("".concat(days, " day(s)"));
console.log("".concat(hours, " hour(s)"));
console.log("".concat(minutes, " minute(s)"));
console.log("".concat(seconds, " second(s)"));

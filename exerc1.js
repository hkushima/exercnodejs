/**
 Exxerci 1
 Usando if, perguntar para um usuário um threshold e depois um valor.
 Verificar se o valor é maior que o threshold, se sim, printar na tela "Abrir IM".
*/


var prompt = require('prompt-sync')();


var threshold = prompt('Digite o threshold: ');
var valor = prompt('Digite o valor: ');

// if (valor > threshold) console.log("Abrir IM"); 
// na solução acima, se eu colocar o threshold 100 e o valor 50, da a mensagem de abrir IM. Por que?
// pra corrigir isso, tive que colocar um parseFloat(). Depois testa ai.
if (parseFloat(valor) > parseFloat(threshold)) console.log("Abrir IM");

else console.log("ok");
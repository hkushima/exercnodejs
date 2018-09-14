/**
 Exercicio 4
 
 Em um array de tamanho 3, perguntar para o usuário o valor de cada posição do array. 
 Depois printar para o usuário se existem números repetidos dentro do array.

 */

 var prompt = require('prompt-sync')();
var array = [];

var valor1 = prompt('Digite o valor da posição 1: ');
array.push(valor1)
var valor2 = prompt('Digite o valor da posição 2: ');
array.push(valor2)
var valor3 = prompt('Digite o valor da posição 3: ');
array.push(valor3)

//console.log("Seu array: "+array)

if (array[0] == array[1] || array[0] == array[2] || array[1] == array[2]) console.log("Existem números repetidos dentro do array.")
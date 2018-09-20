/**
 * Ex1: Preencher um array de 0 a 100 e depois perguntar para o usuário um número.
 * Procurar no array e printar na tela se achou ou não achou.
 */

let arr = [];
let i = 0;
while (i<=100){
    
    arr[i] = i;
    i++;

}

var prompt = require('prompt-sync')();
var valor = prompt('Digite um número: ');
let naoachei = true;
for (let j in arr){

    if (valor == arr[j]) {
        naoachei=false;
        break;
    }
}

if (naoachei) console.log('não achei');
else console.log('achei');
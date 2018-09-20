/**
 * Ex2: Criar um array de 9 elementos numéricos de 0 à 9, porém com um número da sequência faltando (ex: [0,1,2,3,4,6,7,8,9]).
 * Imprimir o número que está faltando no array (usando o exemplo acima, o programa printaria o 5).
 */

//var prompt = require('prompt-sync')();
//var valor = prompt('Valor pra pular: ');
let valor = 5;

let arr = [];
let i = 1;
arr[0] = 0
while (i<9){
    
    if (i == valor) arr[i] = arr[i-1]+2
    else arr[i] =  arr[i-1]+1;
    
    i++;
    
}

console.log(arr)

for (let j=0;j<arr.length;j++){

    if (j != arr[j]) {
        console.log("O valor que está faltando é "+j)
        break;
    }
}
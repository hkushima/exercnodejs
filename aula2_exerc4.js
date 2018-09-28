/**
 * Ex4: Fazer um programa que peça para o usuário digitar uma lista de palavras e depois perguntar quantas vezes uma palavra se repete
 * dentro dessa lista. O programa deverá fazer dois fluxos:
 
 Primeira parte:
    - Perguntar para o usuário uma palavra
    - Salvar a palavra em um array
    - Continuar perguntando até o usuário digitar "sair":
        - Se o usuário digitar "sair", ir para a "segunda parte"
        - Se o usuário digitar outra coisa, continue executando a "primeira parte"
 
 Segunda parte:
    - Perguntar para o usuário uma palavra a ser buscada
    - Exibir quantas vezes essa palavra se repete na lista de palavras

 */

var prompt = require('prompt-sync')();

let palavra;
let arrPalavras = [];

do{

    palavra = prompt('Digite uma palavra (para sair, digite "sair"): ');
    
    if (palavra != "sair") arrPalavras.push(palavra);

} while (palavra != "sair")

let selecPalavra = prompt('Digite uma palavra a ser buscada: ');
let cont = 0;

for (let i=0;i<arrPalavras.length;i++){

    if (selecPalavra == arrPalavras[i]) cont++;

}

console.log('A palavra '+selecPalavra+' foi encontrada '+cont+' vezes.')
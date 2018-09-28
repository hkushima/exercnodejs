/**
 * Ex5: Pegue o exercício 3 e crie um módulo "calc.js".
 * Transforme cada operação (soma, subtração, multiplicação ou divisão) em uma função distinta dentro deste módulo.
 * Importe este novo módulo no fluxo e utilize essas funções.
 */

var lib = require('./node_modules/calc');
/*
// soma
let soma = lib.calcSoma(10,2);
console.log('Teste com soma: '+ soma)

//subtração
let subt = lib.calcSubtr(10,2);
console.log('Teste com subtração: '+ subt)

// multiplicação
let mult = lib.calcMultip(10,2);
console.log('Teste com multiplicação: '+ mult)

// divisão
let divisao = lib.calcDivide(10,2);
console.log('Teste com divisão: '+ divisao)

*/

var prompt = require('prompt-sync')();

let inform, conta, resp, num1, num2, operac, res;
do {
   
    num1 = prompt('Favor informar um numero: ');
    operac = prompt('Favor informar uma operação (soma, subtracao, multiplicacao, divisao): ');
    num2 = prompt('Favor informar outro numero: ');
    
    switch (operac){

        case "soma":
            res = lib.calcSoma(num1,num2);
            console.log("Resultado: "+res);
            break;
        case "subtracao":
            res = lib.calcSubtr(num1,num2);
            console.log("Resultado: "+res);
            break;    
        case "multiplicacao":
            res = lib.calcMultip(num1,num2);
            console.log("Resultado: "+res);
            break;
        case "divisao":
            res = lib.calcDivide(num1,num2);
            console.log("Resultado: "+res);
            break;
    }
    
    //resp = prompt('Para fazer outra operação digite um número ou digite "sair" para finalizar o programa..');
    resp = prompt('Digite "sair" para finalizar o programa ou tecle ENTER para iniciar novamente..');

} while (resp != "sair")

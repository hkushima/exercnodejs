/**
 * Ex3: Criar um fluxo que simule uma calculadora, esse fluxo deve seguir o seguinte processo: 
    - Perguntar para o usuário um número
    - Perguntar para o usuário uma operação: soma, subtração, multiplicação ou divisão ( +, -, * ou / )
    - Perguntar para o usuário outro número
    - Fazer a conta e exibir na tela (ex: 10 * 5, o programa deve exibir 50)
    - Exibir para o usuário: "Para fazer outra operação digite um número ou digite "sair" para finalizar o programa)
        - Se o usuário digitar "sair", finalize o programa
        - Caso o usuário digitar outra coisa (não precisa validar se o valor digitado é um número), repita todos os passos novamente

 */

var prompt = require('prompt-sync')();

let inform, conta, resp, num1, num2, operac, res;
do {
   
    for (let i=0;i<3;i++){

            if (i == 0) num1 = prompt('Favor informar um numero: ');
            else if (i == 1) operac = prompt('Favor informar uma operação (soma, subtracao, multiplicacao, divisao): ');
            else num2 = prompt('Favor informar outro numero: ');
    }
    switch (operac){

        case "soma":
            res = parseFloat(num1)+parseFloat(num2);
            console.log("Resultado: "+res);
            break;
        case "subtracao":
            res = parseFloat(num1)-parseFloat(num2);
            console.log("Resultado: "+res);
            break;    
        case "multiplicacao":
            res = parseFloat(num1)*parseFloat(num2);
            console.log("Resultado: "+res);
            break;
        case "divisao":
            res = parseFloat(num1)/parseFloat(num2);
            console.log("Resultado: "+res);
            break;
    }
    
    
    //resp = prompt('Para fazer outra operação digite um número ou digite "sair" para finalizar o programa..');
    resp = prompt('Digite "sair" para finalizar o programa ou tecle ENTER para iniciar novamente..');

} while (resp != "sair")



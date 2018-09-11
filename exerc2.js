/* 
    Exercicio 2

    Usando if, pergunte para o usuário um valor e depois verifique se esse valor está entre os seguintes ranges
    e  printar a mensagem correspondente:

    Entre 0 e 20 -> "OK"
    Entre 21 e 40 -> "Medio"
    Entre 41 e 60 -> "Alto"
    Entre 61 e 80 -> "Alerta"
    Entre 81 e 100 -> "Critico"
*/
var prompt = require('prompt-sync')();

var valor = prompt('Digite um valor entre 0 e 100: ');

// dúvida - 
// o " </<= " ou " >/>= " tem diferença em relação a tempo de execução ou coisa do tipo?
if (valor >= 0 && valor < 21) console.log("OK")
else if (valor >20 && valor < 41) console.log("Medio")
else if (valor >40 && valor < 61) console.log("Alto")
else if (valor >60 && valor < 81) console.log("Alerta")
else if (valor >80 && valor < 101) console.log("Critico")
else console.log("O número deve ser entre 0 e 100. Comece novamente.")
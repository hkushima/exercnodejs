/**
 * 
Ex6: Crie um programa que simulará uma agenda de contatos, onde um objeto JSON será usado para armazená-los.
    As propriedades deste JSON representarão cada letra do alfabeto, sendo que o valor de cada propriedade será 
    um array de objetos JSON contendo nome e telefone. 
    O json deverá possuir o seguinte formato:
    {
        "A": [{
                "nome": "Alice",
                "telefone": "(11)9999-9999"
            },
            {
                "nome": "Arthur",
                "telefone": "(11)9999-9998"
            }
        ],
        "N": [{
            "nome": "Nelson",
            "telefone": "(11)9999-9997"
        }],
        "R": [{
            "nome": "Rubens",
            "telefone": "(11)9999-9996"
        }]
    }
    Para pegar a primeira letra do nome em maiúsculo, utilize a função 'charAt()' e a função 'toUpperCase()' que toda string do JavaScript possui:
    Ex:
    var x = 'Rafael Nojiri';
    console.log(x.charAt(0).toUpperCase()); // loga 'R'
    O fluxo que este programa deverá seguir é o seguinte:
    Primeira parte:
    - Perguntar para o usuário um nome e um telefone (em sequência)
    - Salvar o objeto contendo o usuário e o telefone dentro da letra correta do JSON
    - Perguntar se o usuário deseja continuar cadastrando contatos
        - Se o usuário digitar "nao", ir para a "segunda parte"
        - Se o usuário digitar "sim", continue executando a "primeira parte"
    Segunda parte:
    - Perguntar para o usuário um nome de contato cadastrado ou se ele deseja sair.
        - Se ele digitar 'sair', o programa deverá ser finalizado.
        - Se ele digitar qualquer outra coisa...
            - Pesquisar no JSON se o contato existe.
                - Se não existir, dizer para o usuário que o contato não está cadastrado.
                - Se existir, imprimir as informações deste usuário (pode ser o json do contato).
        - Repetir a "segunda parte"
 

*/

 var agenda = {};
 var prompt = require('prompt-sync')();
 let nome, telefone, primLetra
 
 do{

    // pega o nome
    nome = prompt('Digite o nome do contato: ');

    // pega a primeira letra
    primLetra = nome.charAt(0).toUpperCase();

    // pega o telefone
    telefone = prompt('Digite o telefone: ');

    //  
    let temp = {}; 
    temp.nome = nome;
    temp.tel = telefone;
    //console.log(temp);

    //inicio da tratatiiva
    // Primeiro verifica se existe a letra no primeiro objeto

    let existe = false;

    for (let letra1 in agenda){
        if (primLetra == letra1){
            existe = true;
            break;
        } 
    }

    if (!existe){
        
        agenda[primLetra] = [];
        agenda[primLetra].push(temp)
    
    } else agenda[primLetra].push(temp)

        cadastro = prompt('Deseja continuar cadastrando? (s/n) ')

 } while(cadastro != "n")

 //console.log(agenda)

 let resp
 do{

    resp = prompt('Digite um nome de contato cadastrado para pesquisar na agenda ou digite "sair" para finalizar: ')
    if (resp != "sair"){

        let primLetra2 = resp.charAt(0).toUpperCase();
        for (let x in agenda){
            
            if (x == primLetra2){
                
                let tam = agenda[primLetra2].length;
                
               // console.log(agenda[primLetra2][0]);
                
                for(let z=0;z<tam; z++){

                    //console.log(agenda[primLetra2][z])
                    
                    if (agenda[primLetra2][z].nome.toUpperCase() == resp.toUpperCase()){
                        
                        //console.log('Achei o contato');
                        console.log("Nome: "+agenda[primLetra2][z].nome)
                        console.log("Telefone: "+agenda[primLetra2][z].tel)
                        break;
                    }
                    
                }
                
                break;
            }   
        }
    }

 } while (resp != "sair")
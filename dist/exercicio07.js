"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio07 = executarExercicio07;
/*
Curso: Tecno. em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS 3º Período Turma: A
Componentes do grupo:

25164877-2 - Leonardo Henrique da Silva
25149031-2 - Ryan Matheus Aparecido Da Silva
25161029-2 - Kelly Cassiane Godk
25119623-2 - Felipe Kuss Marques Belo
25178076-2 - Rafael de Oliveira Ferreira
25148502-2 - Diones Marcos Ferreira
25235104-2 - Eduardo Leonel Santos
25349592-2 - Thiago Pereira de Paula
25160343-2 - Rafael Henrique Rodrigues Pasqual

Data: 05 de Maio de 2026
Descritivo: Encontra o maior número em um array de inteiros.
*/
const input_1 = require("./utils/input");
async function executarExercicio07() {
    let numerosInteiros = [];
    console.log(" Encontrando o maior numero no array ");
    for (let i = 0; i < 5; i++) {
        let resposta = await (0, input_1.pergunta)(`Digite o ${i + 1}o numero inteiro: `) ?? "";
        let numeroConvertido = parseInt(resposta);
        if (isNaN(numeroConvertido)) {
            console.log("Valor inválido, tente novamente.");
            i--;
            continue;
        }
        numerosInteiros.push(numeroConvertido);
    }
    let numeroMaximo = numerosInteiros[0];
    for (let i = 1; i < numerosInteiros.length; i++) {
        let valorAtual = numerosInteiros[i];
        if (valorAtual > numeroMaximo) {
            numeroMaximo = valorAtual;
        }
    }
    console.log("\nO array preenchido foi:", numerosInteiros);
    console.log("O maior numero encontrado foi:", numeroMaximo);
}
/*
O programa usa a função 'pergunta' dentro de um laço 'for' para preencher um array, convertendo
cada entrada para inteiros usando 'parseInt'. A lógica principal funciona assim: criei uma
variável chamada 'numeroMaximo' e disse que ela vale o primeiro item do array. Depois, usei
outro laço 'for' para percorrer o resto da lista. Dentro dele, o 'if' verifica: se o número
atual for maior do que o valor salvo na variável 'numeroMaximo', ela é atualizada com esse
novo valor. No fim, o código mostra o maior número de todos.
*/ 

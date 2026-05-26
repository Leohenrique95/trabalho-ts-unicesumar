"use strict";
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
Descritivo: Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio14 = executarExercicio14;
const input_1 = require("./utils/input");
async function executarExercicio14() {
    const resposta = await (0, input_1.pergunta)("Digite um numero inteiro para ver a tabuada: ") ?? "";
    const numero = parseInt(resposta);
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        return;
    }
    console.log(`\n--- Tabuada do ${numero} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
/*
O programa usa a função 'pergunta' para ler o que você digitou e o 'parseInt'
para transformar esse texto em um número inteiro de verdade. Depois, ele
usa um laço 'for' que conta de 1 até 10. Dentro desse laço, o código faz
a conta de multiplicar e mostra o resultado de cada linha na tela.
*/ 

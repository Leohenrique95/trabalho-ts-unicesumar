/*

Curso: Tecnolodia em Analise e Desenvolvimento de Sistemas
 Disciplina: Programação Front-End
 Professor: José Carlos Flores
 Turma: ADS3A
 Componentes: 
              25149031-2 - Ryan Matheus Aparecido Da Silva
              25161029-2 - Kelly Cassiane Godk
              25119623-2 - Felipe Kuss Marques Belo
              25164877-2 - Leonardo Henrique da Silva
              25178076-2 - Rafael de Oliveira Ferreira
              25148502-2 - Diones Marcos Ferreira
              25235104-2 - Eduardo Leonel Santos
              25349592-2 - Thiago Pereira de Paula 
              25160343-2 - Rafael Henrique Rodrigues Pasqual 

 Data: 24 de Maio de 2026
 Descritivo: Escreva um programa que calcule a media de tres notas fornecidas pelo usuario em typescript

*/

import { pergunta } from './utils/input';

export async function executarExercicio03() {
    console.log("=== Exercício 3 - Média de Notas ===");

    const n1 = await pergunta("Digite a primeira nota: ") ?? "0";
    const n2 = await pergunta("Digite a segunda nota: ") ?? "0";
    const n3 = await pergunta("Digite a terceira nota: ") ?? "0";

    const nota1 = parseFloat(n1);
    const nota2 = parseFloat(n2);
    const nota3 = parseFloat(n3);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log("Por favor, digite notas válidas.");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    console.log(`\nNota 1: ${nota1}`);
    console.log(`Nota 2: ${nota2}`);
    console.log(`Nota 3: ${nota3}`);
    console.log(`Média final: ${media.toFixed(2)}`);
}

/*
 COMO O CÓDIGO FUNCIONA:

 1. O programa foi transformado em uma função assíncrona exportada para que o menu 
    principal consiga carregar e executar a lógica corretamente.

 2. A função 'await pergunta()' é utilizada para pausar a execução e aguardar que 
    o utilizador digite cada uma das três notas no terminal.

 3. O comando 'parseFloat' converte os textos recebidos em números decimais, e 
    uma verificação com 'isNaN' garante que o cálculo só ocorra se os valores forem válidos.

 4. O sistema realiza a soma das notas, divide por três e utiliza o 'toFixed(2)' 
    para mostrar a média final com apenas duas casas decimais.
*/
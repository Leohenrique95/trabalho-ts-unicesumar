/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
25164877-2 - Leonardo Henrique da Silva
25149031-2 - Ryan Matheus Aparecido Da Silva
25161029-2 - Kelly Cassiane Godk
25119623-2 - Felipe Kuss Marques Belo
25178076-2 - Rafael de Oliveira Ferreira
25148502-2 - Diones Marcos Ferreira
25235104-2 - Eduardo Leonel Santos
25349592-2 - Thiago Pereira de Paula
25160343-2 - Rafael Henrique Rodrigues Pasqual

Data: 24 de Maio de 2026
Descritivo: 1 - Escreva um programa que receba dois números inteiros e exiba a soma deles
*******************************************************************************/

import { pergunta } from './utils/input';

export async function executarExercicio01() {
    console.log("\n--- Exercício 1: Soma de dois números ---");

    const aStr = await pergunta('Digite o primeiro número: ');
    const bStr = await pergunta('Digite o segundo número: ');

    const a = parseInt(aStr.trim(), 10);
    const b = parseInt(bStr.trim(), 10);

    if (isNaN(a) || isNaN(b)) {
        console.log("Por favor, digite números válidos!");
    } else {
        const soma = a + b;
        console.log(`A soma de ${a} + ${b} é: ${soma}`);
    }
}

/*
- o programa usa a função pergunta do módulo utils/input para leitura de dados
- a função usa await para que o menu aguarde a digitação do usuário
- executa a leitura de dois valores, converte para inteiro e valida se são números
- o resultado da soma é exibido, retorna o controle para o menu principal
*/

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
 Descritivo: Crie uma calculadora simples de quatro operação (+ - * /)
*/


import { pergunta } from './utils/input';

export async function executarExercicio09() {
    console.log("=== CALCULADORA ===");

    const entrada1 = await pergunta("Digite o primeiro número: ") ?? "";
    const num1 = parseFloat(entrada1);

    if (isNaN(num1)) {
        console.log("Número inválido.");
        return;
    }

    console.log("\n+----------+-------------+");
    console.log(" Operador | Operação    ");
    console.log("+----------+-------------+");
    console.log("    +     | Adição      ");
    console.log("    -     | Subtração   ");
    console.log("    *     | Multiplicação");
    console.log("    /     | Divisão     ");
    console.log("+----------+-------------+");

    let operador = "";
    while (!["+", "-", "*", "/"].includes(operador)) {
        operador = await pergunta("\nDigite o operador: ") ?? "";
        if (!["+", "-", "*", "/"].includes(operador)) {
            console.log("Operador inválido.");
        }
    }

    const entrada2 = await pergunta("Digite o segundo número: ") ?? "";
    const num2 = parseFloat(entrada2);

    if (isNaN(num2)) {
        console.log("Número inválido.");
        return;
    }

    let resultado: number;
    switch (operador) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                console.log("Erro: divisão por zero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default: return;
    }

    console.log(`\nResultado: ${num1} ${operador} ${num2} = ${resultado}`);
}

/*
 COMO O CÓDIGO FUNCIONA:

 1. A lógica agora utiliza 'import' e 'export async function' para se integrar ao 
    sistema de menu do projeto em TypeScript.

 2. O comando 'await pergunta()' substitui o prompt antigo para permitir que o 
    Node.js receba os números e o operador de forma organizada e assíncrona.

 3. O programa valida as entradas com 'parseFloat' e utiliza um laço 'while' que 
    insiste na pergunta até que um operador matemático válido seja digitado.

 4. Um bloco 'switch' identifica o operador escolhido para realizar a conta 
    correspondente, incluindo uma proteção contra divisão por zero antes de exibir o resultado.
*/
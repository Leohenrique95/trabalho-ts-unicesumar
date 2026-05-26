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

Data: 26 de Maio de 2026
Descritivo: Exercício 4 – Foi implementado um código para converter temperatura
de Celsius para Fahrenheit
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio04 = executarExercicio04;
const input_1 = require("./utils/input");
async function executarExercicio04() {
    console.log("\n--- Exercício 4: Conversor Celsius → Fahrenheit ---");
    const celsiusStr = await (0, input_1.pergunta)("Digite a temperatura em graus Celsius: ");
    const celsius = parseFloat(celsiusStr);
    if (isNaN(celsius)) {
        console.log("Erro: valor inválido. Use um número.");
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F`);
}
/* O código recebe em Celsius e faz a conta padrão para descobrir o Fahrenheit,
que nada mais é que o valor digitado multiplicado por 9, dividos por 5 e somado
a 32. Neste código em si, por ser algo simples, não foi implementado nada de diferente*/ 

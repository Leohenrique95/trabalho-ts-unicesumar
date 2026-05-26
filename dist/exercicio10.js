"use strict";
/*************
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
Descritivo: Exercício 10 – Código feito para ordernar array em ordem crescente
*************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio10 = executarExercicio10;
const input_1 = require("./utils/input");
async function executarExercicio10() {
    console.log("\n--- Exercício 10: Ordenar números ---");
    const numeros = [];
    for (let i = 1; i <= 5; i++) {
        const res = await (0, input_1.pergunta)(`Digite o ${i}º número: `);
        const num = parseFloat(res.replace(',', '.'));
        if (isNaN(num)) {
            console.log("Valor inválido, ignorando entrada...");
        }
        else {
            numeros.push(num);
        }
    }
    numeros.sort((a, b) => a - b);
    console.log("\nNúmeros em ordem crescente:");
    console.log(numeros.join(" - "));
}
/*
- o programa usa a função pergunta do módulo utils/input para leitura de dados
- a função utiliza await para garantir que o menu aguarde a digitação do usuário
- lê 5 números, armazena em um array e os ordena de forma crescente
- o resultado ordenado é exibido no console e retorna o controle para o menu principal
*/ 

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
Descritivo: Exercício 17 – Código feito para criar brincadeira do jogo da adivinhação
*************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio17 = executarExercicio17;
const input_1 = require("./utils/input");
async function executarExercicio17() {
    console.log("\n--- Exercício 17: Jogo de Adivinhação ---");
    console.log("Tente adivinhar o número que eu sorteei entre 1 e 100!");
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let acertou = false;
    let tentativas = 0;
    while (!acertou) {
        const palpiteStr = await (0, input_1.pergunta)("Qual o seu palpite? ");
        const palpite = parseInt(palpiteStr);
        tentativas++;
        if (isNaN(palpite)) {
            console.log("Por favor, digite um número válido.");
        }
        else if (palpite < numeroSecreto) {
            console.log("Número maior!");
        }
        else if (palpite > numeroSecreto) {
            console.log("Número menor!");
        }
        else {
            console.log(`\nPARABÉNS! Você acertou em ${tentativas} tentativas.`);
            acertou = true;
        }
    }
}
/*
- Padrão do código foi pesquisada na internet e W3School foi o local com melhor apresentação da idéia
- o programa gera um número aleatório entre 1 e 100 usando Math.random
- utiliza um laço de repetição que só termina quando o usuário acerta o número
- a cada tentativa, fornece dicas se o número secreto é maior ou menor
- utiliza a função pergunta com await para manter o fluxo síncrono com o menu
*/ 

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

Data: 26 de Maio de 2026
Descritivo: Menu principal para selecionar e executar os exercícios
*/
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./utils/input");
const exercicio01_1 = require("./exercicio01");
const exercicio02_1 = require("./exercicio02");
const exercicio03_1 = require("./exercicio03");
const exercicio04_1 = require("./exercicio04");
const exercicio05_1 = require("./exercicio05");
const exercicio06_1 = require("./exercicio06");
const exercicio07_1 = require("./exercicio07");
const exercicio08_1 = require("./exercicio08");
const exercicio09_1 = require("./exercicio09");
const exercicio10_1 = require("./exercicio10");
const exercicio11_1 = require("./exercicio11");
const exercicio12_1 = require("./exercicio12");
const exercicio13_1 = require("./exercicio13");
const exercicio14_1 = require("./exercicio14");
const exercicio15_1 = require("./exercicio15");
const exercicio16_1 = require("./exercicio16");
const exercicio17_1 = require("./exercicio17");
const exercicio18_1 = require("./exercicio18");
async function mostrarMenu() {
    console.log(`
╔═════════════════════════════════════════╗
║       TRABALHO PRÁTICO 1- TypeScript    ║
╠═════════════════════════════════════════╣
║  1 - Soma de dois números               ║
║  2 - Verificar Par ou Ímpar             ║
║  3 - Calcular média de três notas       ║
║  4 - Converter Celsius para Fahrenheit  ║
║  5 - Exibir númes pares de 1 a 20       ║
║  6 - Ler 5 números e armazenar em Array ║
║  7 - Encontrar maior número em um Array ║
║  8 - Contar vogais em uma String        ║
║  9 - Calculadora Simples                ║
║ 10 - Ordernar Array em ordem crescente  ║
║ 11 - Classe Pessoa                      ║
║ 12 - Classe Aluno                       ║
║ 13 - Classe Carro                       ║
║ 14 - Tabuada                            ║
║ 15 - Calculadora IMC                    ║
║ 16 - Validação de Senha                 ║
║ 17 - Jogo da Adivinhação                ║
║ 18 - Contar palavras em uma String      ║
║  0 - Sair                               ║
╚═════════════════════════════════════════╝
  `);
}
async function aguardarEnter() {
    await (0, input_1.pergunta)("\nPressione Enter para voltar ao menu...");
}
async function main() {
    let opcao;
    do {
        await mostrarMenu();
        opcao = await (0, input_1.pergunta)("Escolha uma opção: ");
        switch (opcao) {
            case "1":
                await (0, exercicio01_1.executarExercicio01)();
                await aguardarEnter();
                break;
            case "2":
                await (0, exercicio02_1.executarExercicio02)();
                await aguardarEnter();
                break;
            case "3":
                await (0, exercicio03_1.executarExercicio03)();
                await aguardarEnter();
                break;
            case "4":
                await (0, exercicio04_1.executarExercicio04)();
                await aguardarEnter();
                break;
            case "5":
                await (0, exercicio05_1.executarExercicio05)();
                await aguardarEnter();
                break;
            case "6":
                await (0, exercicio06_1.executarExercicio06)();
                await aguardarEnter();
                break;
            case "7":
                await (0, exercicio07_1.executarExercicio07)();
                await aguardarEnter();
                break;
            case "8":
                await (0, exercicio08_1.executarExercicio08)();
                await aguardarEnter();
                break;
            case "9":
                await (0, exercicio09_1.executarExercicio09)();
                await aguardarEnter();
                break;
            case "10":
                await (0, exercicio10_1.executarExercicio10)();
                await aguardarEnter();
                break;
            case "11":
                await (0, exercicio11_1.executarExercicio11)();
                await aguardarEnter();
                break;
            case "12":
                await (0, exercicio12_1.executarExercicio12)();
                await aguardarEnter();
                break;
            case "13":
                await (0, exercicio13_1.executarExercicio13)();
                await aguardarEnter();
                break;
            case "14":
                await (0, exercicio14_1.executarExercicio14)();
                await aguardarEnter();
                break;
            case "15":
                await (0, exercicio15_1.executarExercicio15)();
                await aguardarEnter();
                break;
            case "16":
                await (0, exercicio16_1.executarExercicio16)();
                await aguardarEnter();
                break;
            case "17":
                await (0, exercicio17_1.executarExercicio17)();
                await aguardarEnter();
                break;
            case "18":
                await (0, exercicio18_1.executarExercicio18)();
                await aguardarEnter();
                break;
            case "0":
                console.log("Encerrando programa...");
                break;
            default:
                console.log("Opção inválida. Escolha entre 0 e 18.");
                await aguardarEnter();
        }
    } while (opcao !== "0");
    await (0, input_1.pergunta)("\nPrograma finalizado com sucesso. Pressione Enter para fechar...");
    (0, input_1.fecharInput)();
}
main().catch(console.error);

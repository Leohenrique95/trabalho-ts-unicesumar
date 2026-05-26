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

import { pergunta, fecharInput } from './utils/input';
import { executarExercicio01 } from './exercicio01';
import { executarExercicio02 } from './exercicio02';
import { executarExercicio03 } from './exercicio03';
import { executarExercicio04 } from './exercicio04';
import { executarExercicio05 } from './exercicio05';
import { executarExercicio06 } from './exercicio06';
import { executarExercicio07 } from './exercicio07';
import { executarExercicio08 } from './exercicio08';
import { executarExercicio09 } from './exercicio09';
import { executarExercicio10 } from './exercicio10';
import { executarExercicio11 } from './exercicio11';
import { executarExercicio12 } from './exercicio12';
import { executarExercicio13 } from './exercicio13';
import { executarExercicio14 } from './exercicio14';
import { executarExercicio15 } from './exercicio15';
import { executarExercicio16 } from './exercicio16';
import { executarExercicio17 } from './exercicio17';
import { executarExercicio18 } from './exercicio18';

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
  await pergunta("\nPressione Enter para voltar ao menu...");
}

async function main() {
  let opcao: string;
  do {
    await mostrarMenu();
    opcao = await pergunta("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        await executarExercicio01();
        await aguardarEnter();
        break;
      case "2":
        await executarExercicio02();
        await aguardarEnter();
        break;
      case "3":
        await executarExercicio03();
        await aguardarEnter();
        break;
      case "4":
        await executarExercicio04();
        await aguardarEnter();
        break;
      case "5":
        await executarExercicio05();
        await aguardarEnter();
        break;
      case "6":
        await executarExercicio06();
        await aguardarEnter();
        break;
      case "7":
        await executarExercicio07();
        await aguardarEnter();
        break;
      case "8":
        await executarExercicio08();
        await aguardarEnter();
        break;
      case "9":
        await executarExercicio09();
        await aguardarEnter();
        break;  
      case "10":
        await executarExercicio10();
        await aguardarEnter();
        break;
      case "11":
        await executarExercicio11();
        await aguardarEnter();
        break;
      case "12":
        await executarExercicio12();
        await aguardarEnter();
        break;
      case "13":
        await executarExercicio13();
        await aguardarEnter();
        break;
      case "14":
        await executarExercicio14();
        await aguardarEnter();
        break;
      case "15":
        await executarExercicio15();
        await aguardarEnter();
        break;
      case "16":
        await executarExercicio16();
        await aguardarEnter();
        break;
      case "17":
        await executarExercicio17();
        await aguardarEnter();
        break;
      case "18":
        await executarExercicio18();
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

  await pergunta("\nPrograma finalizado com sucesso. Pressione Enter para fechar...");
  fecharInput();
}

main().catch(console.error);
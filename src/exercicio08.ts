/*
C/*
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

25160343-2 Rafael Henrique Rodrigues Pasqual 

Data: 05 de Maio de 2026
Descritivo: Programa que conta o número de vogais em um texto fornecido pelo usuário.
*/

import { pergunta } from './utils/input';

export async function executarExercicio08() {
  console.log("\n--- Exercício 8: Contar Vogais em uma String ---");

  const vogais = "aeiouáéíóúâêîôûãõàèìòùäëïöü";

  const texto = await pergunta("Digite uma frase ou palavra: ");

  let contador: number = 0;

  for (const letra of texto.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  console.log(`\nTexto informado: "${texto}"`);
  console.log(`Número de vogais encontradas: ${contador}`);
}

// EXPLICAÇÃO DO CÓDIGO
// A função é exportada como async para poder usar o await com a função pergunta,
// que aguarda o usuário digitar algo no terminal antes de continuar.
// A variável vogais contém todas as vogais, incluindo as acentuadas do português.
// O laço for...of percorre cada caractere do texto convertido para minúsculas,
// verificando se está na lista de vogais. A cada vogal encontrada, o contador sobe.
// Por fim, o resultado é exibido no terminal junto com o texto digitado.

// EXPLICAÇÃO DO CÓDIGO
/* 
O módulo readline é importado do Node.js para permitir leitura de dados via terminal.
A interface rl conecta a entrada do teclado (stdin) com a saída do terminal (stdout).
A função contarVogais recebe uma string, converte tudo para minúsculas e percorre
cada caractere verificando se ele está contido na lista de vogais definida, incluindo
vogais acentuadas do português. A cada vogal encontrada, o contador é incrementado.
Por fim, rl.question exibe a pergunta no terminal, aguarda a resposta do usuário e
chama a função exibindo o resultado. O rl.close() encerra a leitura do terminal.
*/
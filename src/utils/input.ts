/*******************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
25004000-1 - Ana Castela da Silva
25004001-2 - Pedro Alvares Cabral
25004001-3 - Roberto Carlos de Andrade
25004001-4 - Sergio Roberto Gularte
25004001-5 - Lauana Prado de Andrade
Data: 05 de Maio de 2026
Descritivo: Função auxiliar para ler entrada do teclado de forma assíncrona
***********************************************************************/

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function pergunta(pergunta: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta: string) => {
      resolve(resposta);
    });
  });
}

export function fecharInput() {
  rl.close();
}
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
 Descritivo: Escreva um programa que leia um número inteiro e informe de ele par ou ímpar
 
*/
import { pergunta } from './utils/input';

export async function executarExercicio02() {
const resposta = await pergunta("Digite um número inteiro: ") ??"";
const numero = parseInt (resposta);

if (isNaN(numero)) {
  console.log("Valor inválido. Por favor, digite um número inteiro.");
} else if (numero % 2 === 0) {
  console.log(`O número ${numero} é PAR.`);
} else {
  console.log(`O número ${numero} é ÍMPAR.`);
}
}
/*
  COMO O CÓDIGO FUNCIONA:

  1. Usa-se "Await" para permitir leitura síncrona de dados no terminal e ?? "" para 
  garantir que sempre haverá uma string.

  2. A função await pergunta() exibe a mensagem e aguarda o usuário digitar um valor,
     retornando a resposta diretamente (sem callbacks ou Promises).

  3. O valor digitado é convertido para número inteiro com parseInt().
     - Se não for um número válido (isNaN), exibe mensagem de erro.
     - Se o resto da divisão por 2 for 0 (número % 2 === 0), o número é PAR.
     - Caso contrário, o número é ÍMPAR.
 */

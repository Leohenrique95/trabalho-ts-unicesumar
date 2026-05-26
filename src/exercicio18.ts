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

Data: 05 de Maio de 2026
Descritivo: Desenvolva um programa que conte quantas palavras existem em uma string fornecida
pelo usuário.
*/

import { pergunta } from './utils/input';

export async function executarExercicio18() {
    const frase = await pergunta("Digite uma frase: ") ?? "";

    if (frase.trim().length === 0) {
        console.log("\nA frase está vazia. Total de palavras: 0");
        return;
    }

    let palavras: number = frase.trim().split(/\s+/).length;

    console.log(`\nA frase tem ${palavras} palavra(s).`);
}

/*
Primeiro, o sistema recebe o seu texto e usa o 'trim' para limpar espaços 
sobrando no começo ou no fim. Depois, o comando 'split' corta a frase 
em pedaços toda vez que encontra um espaço, criando uma lista de palavras. 
Por último, o 'length' conta o tamanho dessa lista para dizer quantas 
palavras foram digitadas.
*/
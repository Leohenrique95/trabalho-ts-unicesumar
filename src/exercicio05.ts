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
Descritivo: Escreva um programa que exiba apenas os números pares de 1 a 20.
*/
import { pergunta } from './utils/input';

export async function executarExercicio05() {
for (let i: number = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
}
/*
O programa utiliza o laço de repetição (for) pra contar de 1 a 20 e a condição (if) com o operador de módulo (%) pra verificar se o resto
da divisão por 2 da zero. Caso seja, o numéro vai ser par e é exibido no console.
*/
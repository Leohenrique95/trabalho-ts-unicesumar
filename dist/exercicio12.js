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

Data: 05 de Maio de 2026
Descritivo: Escreva um programa que use herança para criar uma classe Aluno que herda de
Pessoa e adiciona um atributo matricula.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio12 = executarExercicio12;
async function executarExercicio12() {
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
        exibirDados() {
            console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        }
    }
    class Aluno extends Pessoa {
        constructor(nome, idade, matricula) {
            super(nome, idade);
            this.matricula = matricula;
        }
        exibirAluno() {
            this.exibirDados();
            console.log(`Matrícula: ${this.matricula}`);
        }
    }
    const alunoTeste = new Aluno("rafael", 20, "25178076-2");
    alunoTeste.exibirAluno();
}
/* Como funciona:
Criei a classe 'Pessoa' com nome e idade, e a classe 'Aluno' herdou tudo dela usando 'extends' (herança).
Usei o 'super()' para passar os dados repetidos para a classe pai e só adicionei a 'matricula' em Aluno.
No fim, criei um aluno de teste e mandei printar na tela.
*/ 

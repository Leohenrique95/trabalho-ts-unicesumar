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
 Descritivo: Escreva um programa que defina uma classe pessoa com atributos nome e idade, e métodos para exibir esses atributos

*/
import { pergunta } from './utils/input';

// A classe fica fora para servir de molde para o programa
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirNome(): void {
        console.log(`Nome: ${this.nome}`);
    }

    exibirIdade(): void {
        console.log(`Idade: ${this.idade}`);
    }

    exibirDados(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`);
    }
}

export async function executarExercicio11() {
    console.log("=== Cadastro de Pessoa (POO) ===");

    // Captura de dados usando a nova fórmula
    const nomeInput = await pergunta("Digite o nome da pessoa: ") ?? "";
    const idadeInput = await pergunta("Digite a idade da pessoa: ") ?? "0";
    const idadeNum = parseInt(idadeInput);

    if (isNaN(idadeNum)) {
        console.log("Idade inválida. Operação cancelada.");
        return;
    }

    // Instanciando o objeto com os dados fornecidos
    const pessoa1 = new Pessoa(nomeInput, idadeNum);

    console.log("\n--- Dados Cadastrados ---");
    pessoa1.exibirDados();
}

/*
 COMO O CÓDIGO FUNCIONA:

 1. O programa define uma classe chamada "Pessoa" que funciona como um molde, 
    usando um 'constructor' para receber e salvar o nome e a idade do objeto.

 2. A função foi atualizada para 'export async', permitindo que o menu principal 
    execute o código e aguarde as respostas do utilizador.

 3. Utilizamos o 'await pergunta()' para receber os dados do teclado e o 'parseInt' 
    para garantir que a idade seja armazenada como um número inteiro válido.

 4. O sistema usa a palavra-chave 'new' para criar uma instância da classe Pessoa 
    com os dados digitados e chama o método 'exibirDados()' para mostrar tudo na tela.

CONCEITOS APLICADOS:
- Programação Orientada a Objetos (POO)
- Encapsulamento de dados em uma classe
- Instanciação de objetos com "new"
- Uso de "this" para acessar atributos da própria instância

*/

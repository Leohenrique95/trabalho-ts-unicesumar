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

25160343-2 Rafael Henrique Rodrigues Pasqual 

Data: 05 de Maio de 2026
Descritivo:Programa que define uma interface Veiculo com métodos para acelerar e frear e
implementa essa interface em uma classe Carro.
*/

import { pergunta } from './utils/input';

interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  private velocidade: number;
  private readonly modelo: string;

  constructor(modelo: string) {
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar(): void {
    this.velocidade += 10;
    console.log(`${this.modelo} acelerou! Velocidade atual: ${this.velocidade} km/h`);
  }

  frear(): void {
    if (this.velocidade > 0) {
      this.velocidade -= 10;
    }
    console.log(`${this.modelo} freou! Velocidade atual: ${this.velocidade} km/h`);
  }
}

export async function executarExercicio13() {
  console.log("\n--- Exercício 13: Classe Carro ---");

  const modelo = await pergunta("Digite o modelo do carro: ");
  const meuCarro = new Carro(modelo.trim());
  console.log(`\nCarro "${modelo.trim()}" criado com sucesso!`);

  let continuar = true;

  while (continuar) {
    console.log("\n--- O que deseja fazer? ---");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("0 - Voltar ao menu");

    const opcao = await pergunta("\nEscolha uma opção: ");

    switch (opcao.trim()) {
      case "1":
        meuCarro.acelerar();
        break;
      case "2":
        meuCarro.frear();
        break;
      case "0":
        continuar = false;
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

// EXPLICAÇÃO DO CÓDIGO
// A interface Veiculo define um contrato com os métodos acelerar e frear, obrigando
// qualquer classe que use implements a implementá-los, ou o TypeScript acusa erro.
// A classe Carro usa private na velocidade para que só ela mesma possa alterá-la,
// e readonly no modelo para impedir mudanças após a criação do objeto.
// A função exportada é async para usar await com a função pergunta do projeto.
// O laço while substitui a recursão anterior, mantendo o menu ativo até o usuário
// digitar 0 para voltar ao menu principal sem conflito com o readline global.

// EXPLICAÇÃO DO CÓDIGO
/* 
O módulo readline é importado para capturar dados digitados pelo usuário no terminal.
A interface Veiculo define um contrato com dois métodos obrigatórios: acelerar e frear.
Qualquer classe que use implements Veiculo é obrigada a implementar esses dois métodos,
caso contrário o TypeScript acusa erro em tempo de compilação.
A classe Carro implementa essa interface. O atributo velocidade é private, ou seja,
só pode ser acessado dentro da própria classe. O atributo modelo é readonly, impedindo
que seja alterado após a criação do objeto. O constructor inicializa os dois atributos
quando um novo Carro é criado com o operador new.
A função menu exibe as opções disponíveis e aguarda a escolha do usuário em loop,
chamando acelerar ou frear conforme a opção digitada, até que o usuário escolha sair.
O programa começa pedindo o modelo do carro, cria o objeto Carro e chama o menu.
*/
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

Data: 26 de Maio de 2026

Descritivo: Exercício 15 – Calculadora de IMC com classificação de peso
segundo a OMS (Organização Mundial da Saúde).*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio15 = executarExercicio15;
const input_1 = require("./utils/input");
async function executarExercicio15() {
    console.log("\n--- Exercício 15: Calculadora de IMC ---");
    const pesoStr = await (0, input_1.pergunta)("Digite seu peso (kg): ");
    const alturaStr = await (0, input_1.pergunta)("Digite sua altura (m): ");
    const peso = parseFloat(pesoStr.replace(',', '.'));
    const altura = parseFloat(alturaStr.replace(',', '.'));
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Valores inválidos. Use números positivos para peso e altura.");
        return;
    }
    const imc = peso / (altura * altura);
    let classificacao = "";
    if (imc < 18.5)
        classificacao = "Abaixo do peso";
    else if (imc < 25)
        classificacao = "Peso normal";
    else if (imc < 30)
        classificacao = "Sobrepeso";
    else if (imc < 35)
        classificacao = "Obesidade grau I";
    else if (imc < 40)
        classificacao = "Obesidade grau II";
    else
        classificacao = "Obesidade grau III";
    console.log(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
}
/* A calculadora de IMC faz o divisão do peso pela altura ao quadrado. Como o TS utiliza um padrão americano
foi adicionado um replace as constantes peso e altura para sibstituir ponto por vírgula para seguir o padrão
brasileiro. Também gera uma mensagem de erro caso seja digitado um número negativo*/ 

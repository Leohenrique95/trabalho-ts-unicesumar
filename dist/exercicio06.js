"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio06 = executarExercicio06;
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
Descritivo: Lê 5 números do usuário, armazena em um array e exibe todos os números.
*/
const input_1 = require("./utils/input");
async function executarExercicio06() {
    let numeros = [];
    console.log(" Vamos armazenar 5 numeros ");
    for (let i = 0; i < 5; i++) {
        let resposta = await (0, input_1.pergunta)(`Digite o ${i + 1}o numero: `) ?? "0";
        let numeroConvertido = parseFloat(resposta);
        if (isNaN(numeroConvertido)) {
            console.log("Valor inválido. Tente novamente.");
            i--;
            continue;
        }
        numeros.push(numeroConvertido);
    }
    console.log("\nOs numeros armazenados no array foram:");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}
/*
O programa usa a função 'pergunta' para ler os dados e o 'parseFloat' para
transformar o texto em números (aceitando decimais). Criei um array vazio
chamado 'numeros' e um laço 'for' que roda até obter 5 entradas válidas.
Dentro dele, adicionei uma verificação com 'isNaN' que avisa se o valor for
inválido e decrementa o contador para repetir a pergunta. Apenas números
válidos são guardados na lista com o comando 'push'. No fim, outro laço 'for'
percorre o array usando o 'length' para mostrar todos os itens guardados.
*/ 

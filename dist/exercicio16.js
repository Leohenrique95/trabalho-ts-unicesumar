"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
25164877-2 - Leonardo Henrique da Silva
25149031-2 - Ryan Matheus Aparecido Da Silva
25161029-2 - Kelly Cassiane Godk
25119623-2 - Felipe Kuss Marques Belo
25178076-2 - Rafael de Oliveira Ferreira
25148502-2 - Diones Marcos Ferreira
25235104-2 - Eduardo Leonel Santos
25349592-2 - Thiago Pereira de Paula
25160343-2 - Rafael Henrique Rodrigues Pasqual

Data: 24 de Maio de 2026
Descritivo: 16 - Escreva um programa que valide uma senha de acordo com os seguintes critérios:
- Pelo menos 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um número
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio16 = executarExercicio16;
const input_1 = require("./utils/input");
function validaSenha(senha) {
    const temOitoOuMais = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    return temOitoOuMais && temMaiuscula && temMinuscula && temNumero;
}
async function executarExercicio16() {
    console.log("\n--- Exercício 16: Validação de Senha ---");
    const senha = await (0, input_1.pergunta)('Digite a senha para validar: ');
    const senhaTrim = senha.trim();
    const valida = validaSenha(senhaTrim);
    if (valida) {
        console.log('Senha válida');
    }
    else {
        console.log('Senha inválida');
    }
}
/*
- o programa usa a função pergunta do módulo utils/input para leitura de dados
- a função usa await para que o programa aguarde a digitação do usuário
- validaSenha verifica se a senha atende os critérios:
  - se tem pelo menos 8 caracteres
  - se tem pelo menos uma letra maiúscula
  - se tem pelo menos uma letra minúscula
  - se tem pelo menos um número (0-9)
- a função retorna true se todas as condições forem satisfeitas, senão retorna false
- executarExercicio16 chama pergunta, passa a senha para validaSenha e imprime 'Senha válida'
quando true, ou 'Senha inválida' quando false
*/

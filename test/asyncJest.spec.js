// const assert = require('assert'); // é preciso comentar esta linha para realizar o teste
const answerPhone = require('../src/asyncJest'); // é preciso descomentar esta linha ára testar answerPhone
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => { // é preciso transformar a callback function em async, pois AnswerPhone é assíncrona
    // assert.fail(); // é preciso comentar esta linha para realizar o teste
    // Insira seu teste assíncrono aqui
    expect.assertions(1); // notifica o Jest para esperar 1 assertion no teste
    await expect(answerPhone(true)).resolves.toEqual('Oi!'); // ao receber o argumento true, answerPhone deve retornar 'Oi!'
  });
  test('ocupado', async () => { // é preciso transformar a callback function em async, pois AnswerPhone é assíncrona
    // assert.fail(); // é preciso comentar esta linha para realizar o teste
    // Insira seu teste assíncrono aqui
    expect.assertions(1); // notifica o Jest para esperar 1 assertion no teste
    const errorMsg = 'Infelizmente não podemos atender...'; // mensagem de erro de answerPhone
    await expect(answerPhone(false)).rejects.toEqual(new Error(errorMsg)); // ao receber o argumento false, answerPhone gera erro e retorna errorMsg
  });
});

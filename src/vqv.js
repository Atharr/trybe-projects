/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (TWFyY2VsbG8, QWx2ZXM) => TWFyY2VsbG8 && QWx2ZXM // verifica se os parâmetros foram passados...
  // retorna uma string montada com os parâmetros recebidos 
  && `Oi, meu nome é ${TWFyY2VsbG8}!\nTenho ${QWx2ZXM} anos,\n\
trabalho na Trybe e mando muito em programação!\n#VQV!`;

module.exports = vqv;

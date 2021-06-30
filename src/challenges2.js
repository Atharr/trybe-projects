// Desafio 10
function techList(list, name) {
  // seu código aqui
  let objList = []; // cria array vazio para receber os objetos
  list.sort(); // ordena a lista
  for (let tech of list) {
    // para cada item de list, acrescenta um objeto
    objList.push({ tech, name });
  }
  // retorna o array, ou 'Vazio!' se o array está vazio
  return objList.length === 0 ? 'Vazio!' : objList;
}

// Desafio 11
function generatePhoneNumber(digitos) {
  // seu código aqui
  // se recebeu quantidade diferente de dígitos, retorna mensagem de erro
  if (digitos.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // faz a contagem do número de repetições: a função callback gera um array com as frequências
  let count = digitos.reduce((tot, i) => { tot[i] = i in tot ? tot[i] + 1 : 1; return tot; }, []);
  // testa as posições: se não forem dígitos (<0 ou >9) ou repetir 3x ou mais, retorna mensagem de erro
  if (digitos.some((i) => i < 0 || i > 9 || count[i] >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // gera o número de telefone: splice() insere os caracteres
  digitos.splice(0, 0, '(');
  digitos.splice(3, 0, ') ');
  digitos.splice(9, 0, '-');
  // join() converte o array em string
  return digitos.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  // match() cria um array com os números encontrados, e reduce() usa o callback para fazer a soma
  let coposAgua = bebidas.match(/\d/g).reduce((total, valor) => (Number(total) + Number(valor)));
  // monta a string de retorno, acrescentando 's' caso o valor seja mais de 1
  return coposAgua.toString().concat(' copo', (coposAgua > 1 ? 's' : ''), ' de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

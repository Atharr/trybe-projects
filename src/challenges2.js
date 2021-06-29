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
  if (digitos.length !== 11) {
    return 'Array com tamanho incorreto.'; // se recebeu quantidade diferente de dígitos, retorna mensagem de erro
  }
  for (let digit of digitos) {
    if (digit < 0 || digit > 9) {
      return 'não é possível gerar um número de telefone com esses valores'; // se as entradas não forem dígitos, retorna mensagem de erro
    }
  }
  for (let i = 0; i <= 9; i += 1) { // a cada passagem, testamos um dígito:
    if (digitos.filter((x) => (x === i)).length >= 3) { // filter() elimina os demais valores do array, usando a função callback; length contém o número de ocorrências
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  digitos.splice(0, 0, '('); // gera o número de telefone: splice() insere os caracteres
  digitos.splice(3, 0, ') ');
  digitos.splice(9, 0, '-');
  return digitos.join(''); // join() converte o array em string
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

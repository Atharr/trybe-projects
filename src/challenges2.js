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
function generatePhoneNumber() {
  // seu código aqui
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

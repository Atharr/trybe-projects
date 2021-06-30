// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  // o operador && retorna TRUE se ambos os argumentos forem TRUE, do contrário retorna FALSE
  return (param1 && param2);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // basta multiplicar base * altura / 2
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  // split() separa a string a cada ocorrência de " ", e transforma em um array com os pedaços
  return str.split(' ');
}

// Desafio 4
function concatName(list) {
  // seu código aqui
  // pop() obtém o último elemento do array, shift() obtém o primeiro
  // concat() une os dois, acrescentando a string ", " no meio
  return list.pop().concat(', ', list.shift());
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // basta multiplicar o número de vitórias por 3 e somar com os empates
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(list) {
  // seu código aqui
  // Math.max() encontra o maior valor do array.
  // OBS: é preciso colocar "..." antes do nome para não converter os valores do array em strings!
  // filter() elimina os demais valores do array, usando a função callback
  // finalmente, a propriedade length contém o número de ocorrências
  return list.filter((x) => (x === Math.max(...list))).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse); // distância de cat1 até mouse
  let distance2 = Math.abs(cat2 - mouse); // distância de cat2 até mouse
  switch (true) {
  case distance1 < distance2:
    // cat1 está mais perto
    return 'cat1';
  case distance2 < distance1:
    // cat2 está mais perto
    return 'cat2';
  default:
    // os gatos estão à mesma distância
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  // função callback para map()
  function replace(value) {
    switch (true) {
    case (value % 3 === 0) && (value % 5 === 0):
      return 'fizzBuzz'; // divisível por 3 e por 5
    case (value % 3 === 0):
      return 'fizz'; // divisível por 3 mas não por 5
    case (value % 5 === 0):
      return 'buzz'; // divisível por 5 mas não por 3
    default:
      return 'bug!'; // não é divisível por 3 nem por 5
    }
  }
  // map() executa uma função callback em cada elemento do array
  return numbers.map(replace);
}

// Desafio 9
function encode(str) {
  // seu código aqui
  // replace() permite substituir usando regex, e globalmente usando /g
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  return str.replace(/u/g, '5');
}
function decode(str) {
  // seu código aqui
  // replace() permite substituir usando regex, e globalmente usando /g
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  return str.replace(/5/g, 'u');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

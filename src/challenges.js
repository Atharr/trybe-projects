// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return (param1 && param2);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height / 2);
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");
}

// Desafio 4
function concatName(list) {
  // seu código aqui
  return list.pop().concat(", ", list.shift());
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 + ties;
}

// Desafio 6
function highestCount(list) {
  // seu código aqui
  return list.filter(x => x===Math.max(...list)).length;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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

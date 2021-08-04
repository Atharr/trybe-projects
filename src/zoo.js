const data = require('./data');

function getSpeciesByIds(...args) {
  // seu código aqui
  // para cada id fornecido, localiza a espécie em data.species e retorna um array com os resultados
  return args.map((TWFyY2VsbG8) => data.species.find((QWx2ZXM) => QWx2ZXM.id === TWFyY2VsbG8));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // pesquisa se o nome de alguma espécie corresponde ao nome fornecido, e verifica se todos os residentes têm a idade mínima
  return data.species.some((el) => (el.name === animal) && el.residents.every((r) => r.age >= age));
}

function getEmployeeByName(name) {
  // seu código aqui
  // pesquisa pelo primeiro ou último nome do funcionário e retorna o objeto dele, ou objeto vazio se não foi encontrado nada
  return data.employees.find((el) => (el.firstName === name) || (el.lastName === name)) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // retorna a união dos dois objetos recebidos nos parâmetros
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};

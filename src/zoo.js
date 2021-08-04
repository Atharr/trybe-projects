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

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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

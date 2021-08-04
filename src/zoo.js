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
  // pesquisa em todos os funcionários se o id fornecido está na lista de managers
  return data.employees.some((employee) => (employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // acrescenta um funcionário no array employees com os dados fornecidos
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  // seu código aqui
  // nenhuma espécie indicada; retorna um objeto com cada espécie e seu respectivo número de residentes
  if (!species) {
    // popula o objeto anmialsCount com cada espécie e seu número de residentes
    return data.species.reduce((animalsCount, element) => {
      // declara uma variável temporária, para evitar regra do lint de assignment na variável acumuladora
      const temp = animalsCount;
      // cria chave com o nome da espécie e o número de residentes
      temp[element.name] = element.residents.length;
      // retorna a variável temporária (===animalCount) atualizada
      return temp;
    }, {});
  }
  // se foi fornecida uma espécie, retorna seu número de residentes
  return data.species.find((element) => (element.name === species)).residents.length;
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

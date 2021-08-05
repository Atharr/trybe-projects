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
    return data.species.reduce((animalsCount, element) =>
      // acrescenta a animalsCount a espécie e o número de residentes
      Object.assign(animalsCount, { [element.name]: element.residents.length }), {});
  }
  // se foi fornecida uma espécie, retorna seu número de residentes
  return data.species.find((element) => (element.name === species)).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  try {
    // calcula o valot total, multiplicando os números de entradas pelos valores correspondentes
    return Object.keys(entrants).reduce((tot, key) => tot + entrants[key] * data.prices[key], 0);
  } catch (err) {
    // se nenhum parâmetro for passado, ou se o parâmetro for um objeto vazio, retorna 0
    return 0;
  }
}

function getAnimalMap(options) {
  // seu código aqui
  // declara objeto com localizações esperadas; cada localização é um array, inicialmente vazio
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  // se nenhuma opção foi passada, ou se includeNames é false...
  if (!options || !options.includeNames) {
    // ...para cada espécie, acrescenta apenas o nome da espécie
    data.species.forEach((spec) => locations[spec.location].push(spec.name));
    return locations;
  }
  // se includeNames é true, acrescenta um objeto cuja chave é o nome da espécie...
  data.species.forEach((spec) => locations[spec.location].push({ [spec.name]: spec.residents
    // ...(se a opção sex foi especificada, filtra os residentes pelo sexo informado)...
    .filter((resident) => (!options.sex || (resident.sex === options.sex)))
    // ...(se a opção sorted foi especificada, ordena os resultados)...
    .sort(options.sorted ? (a, b) => a.name.localeCompare(b.name) : () => 0)
    // ...e o valor um array com os nomes dos residentes
    .map((resident) => resident.name) }));
  return locations;
}

function getSchedule(dayName) {
  // seu código aqui
  // declara um objeto vazio
  const days = {};
  // para cada chave do objeto hours (filtrando pelo dia, caso seja fornecido)...
  Object.keys(data.hours).filter((day) => !dayName || (day === dayName)).forEach((day) => {
    // ...acrescenta um texto formatado ao objeto days
    const { open, close } = data.hours[day];
    days[day] = open === close ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  });
  // retorna o objeto days
  return days;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // localiza o id da primeira espécie pela qual o funcionário é responsável
  const firstSpecies = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  // localiza o residente mais velho da espécie localizada...
  const oldest = data.species
    // ...obtendo o array dos residentes da espécie...
    .find((species) => firstSpecies.includes(species.id)).residents
    // ...e ordenando-os por ordem decrescente de idade e retornando o primeiro elemento
    .sort((a, b) => b.age - a.age)[0];
  // retorna os valores do objeto do residente na forma de array
  return Object.values(oldest);
}

function increasePrices(percentage) {
  // seu código aqui
  // altera todos os preços
  return Object.keys(data.prices).forEach((key) => {
    // aplica o reajuste percentual, ajustando com duas casas decimais
    data.prices[key] = Math.ceil(data.prices[key] * (percentage + 100)) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  // coverage(employee) retorna um objeto com o nome formatado do funcionário e um array com os nomes das espécies de que ele cuida
  const coverage = (employee) => ({ [`${employee.firstName} ${employee.lastName}`]:
    employee.responsibleFor.map((id) => data.species.find((species) => species.id === id).name) });
  // se nenhum parâmetro foi fornecido...
  if (!idOrName) {
    // ...retorna uma lista de todos os funcionários com as respectivas coberturas
    return data.employees.reduce((list, employee) => Object.assign(list, coverage(employee)), {});
  }
  // se foi fornecido um nome ou id, retorna um objeto com a cobertura daquele funcionário
  return coverage(data.employees.find((e) => e.id === idOrName) || getEmployeeByName(idOrName));
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

// randomClasses(obj): atribui classes aleatórias a um elemento
function randomClasses(obj) {
  // array de estilos agrupados em categorias
  const estilos = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright']];
  // limpa todas as classes já existentes no objeto
  while (obj.classList.item(0)) {
    obj.classList.remove(obj.classList.item(0));
  }
  // para cada categoria, acrescenta uma classe aleatória ao objeto
  estilos.forEach((element) => {
    obj.classList.add(element[Math.floor(Math.random() * element.length)]);
  });
}

// createSpan(texto): configura um elemento span contendo um texto
function createSpan(texto) {
  // cria um elemento span
  const span = document.createElement('span');
  // atribui ao elemento uma palavra
  span.textContent = texto;
  // atribui classes aleatórias ao elemento
  randomClasses(span);
  // acrescenta o event listener do span
  span.addEventListener('click', (event) => { randomClasses(event.target); });
  return span;
}

// setButtonCriar(): configura o botão que gera a carta
function setButtonCriar() {
  const cartaTexto = document.getElementById('carta-texto'); // obtém o seletor do input #carta-texto
  const cartaGerada = document.getElementById('carta-gerada'); // obtém o seletor do parágrafo #carta-gerada
  // acrescenta o event listener do botão #criar-carta
  document.getElementById('criar-carta').addEventListener('click', () => {
    while (cartaGerada.firstChild) { // elimina todos os elementos filhos de #carta-gerada
      cartaGerada.removeChild(cartaGerada.lastChild);
    }
    if (/\S/.test(cartaTexto.value)) { // testa se o texto possui algo além de whitespace
      const texto = cartaTexto.value.split(' '); // separa o texto em um array de palavras
      texto.forEach((element) => { cartaGerada.appendChild(createSpan(element)); }); // acrescenta a palavra ao parágrafo #carta-gerada
    } else {
      cartaGerada.appendChild(document.createTextNode('Por favor, digite o conteúdo da carta.')); // se nada foi digitado, mostra mensagem de erro
    }
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners
  setButtonCriar();
};

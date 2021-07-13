let rgbColor; // seletor do span #rgb-color

// randomColor(): gera uma cor aleatoria no formato rgb(r,g,b)
// cada componente pode variar entre 0 e 255
function randomColor() {
  // gera aleatoriamente cada um dos componentes
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // retorna uma expressão rgb(r,g,b)
  return `rgb(${r},${g},${b})`;
}

// removeAllChilds(): remove todos os filhos de um elemento
// o elemento precisa ser do tipo nodeList
function removeAllChilds(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild); // remove os filhos
  }
}

// rightColor(): realiza as ações quando o usuário escolhe a cor certa
function rightColor() {
  document.getElementById('answer').textContent = 'Acertou!'; // indica acerto ao usuário
}

// wrongColor(): realiza as ações quando o usuário escolhe a cor errada
function wrongColor() {
  document.getElementById('answer').textContent = 'Errou! Tente novamente!'; // indica erro ao usuário
}

// createPalette(): monta a paleta e configura as cores
// o parâmetro n determina quantas cores são adicionadas à paleta
function createPalette(n) {
  const palette = document.getElementById('color-palette'); // obtém o seletor da #color-palette
  removeAllChilds(palette);
  const x = Math.floor(Math.random() * n); // sorteia um número
  // acrescenta as cores à color-palette
  for (let i = 0; i < n; i += 1) {
    const rnd = randomColor(); // escolhe uma cor aleatória
    const color = document.createElement('div'); // cria um elemento div
    color.className = 'ball'; // atribui a classe .ball
    color.style.backgroundColor = rnd; // atribui a cor aleatória ao elemento
    color.addEventListener('click', (i === x ? rightColor : wrongColor)); // acrescenta o event listener apropriado
    palette.appendChild(color); // anexa a div color como filha de color-palette
    if (i === x) {
      rgbColor.textContent = rnd; // se for a cor sorteada, guarda em rgbColor
    }
    document.getElementById('answer').textContent = 'Escolha uma cor'; // inicializa a mensagem ao usuário
  }
}

// executa as funções ao carregar a página
window.onload = () => {
  // obtém o seletor do span #rgb-color
  rgbColor = document.getElementById('rgb-color');
  // cria a paleta de cores com 4 elementos
  createPalette(6);
};

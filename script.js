// status do jogo
let gameReady;

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

// removeAllChilds(element): remove todos os filhos de um elemento
// o elemento precisa ser do tipo nodeList
function removeAllChilds(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild); // remove os filhos
  }
}

// rightColor(): realiza as ações quando o usuário escolhe a cor certa
function rightColor() {
  if (gameReady) {
    const placar = document.getElementById('score'); // obtém o seletor do span #score
    document.getElementById('answer').textContent = 'Acertou!'; // indica acerto ao usuário
    placar.textContent = parseInt(placar.textContent, 10) + 3; // atualiza o placar
    gameReady = false; // encerra o jogo
  }
}

// wrongColor(): realiza as ações quando o usuário escolhe a cor errada
function wrongColor() {
  if (gameReady) {
    document.getElementById('answer').textContent = 'Errou! Tente novamente!'; // indica erro ao usuário
  }
}

// createPalette(): monta a paleta e configura as cores
// o parâmetro n determina quantas cores são adicionadas à paleta
function createPalette(n) {
  const palette = document.getElementById('color-palette'); // obtém o seletor da #color-palette
  removeAllChilds(palette); // remove todos os filhos (cores)
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
      document.getElementById('rgb-color').textContent = rnd; // se for a cor sorteada, guarda em #rgb-color
    }
    document.getElementById('answer').textContent = 'Escolha uma cor'; // inicializa a mensagem ao usuário
  }
  gameReady = true; // indica que o jogo está pronto
}

function setButtonResetGame() {
  // adiciona o event listener ao botão #reset-game
  document.getElementById('reset-game').addEventListener('click', () => { createPalette(6); });
}

// executa as funções ao carregar a página
window.onload = () => {
  // cria a paleta de cores com 6 elementos
  createPalette(6);
  // configura o event listener do botão
  setButtonResetGame();
  // inicializa o placar
  document.getElementById('score').textContent = 0;
};

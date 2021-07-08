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

// createPalette(): monta a paleta e configura as cores
// o parâmetro n determina quantas cores são adicionadas à paleta
function createPalette(n) {
  const palette = document.querySelector('#color-palette'); // obtém o seletor da #color-palette
  while (palette.firstChild) {
    palette.removeChild(palette.lastChild); // remove os filhos (colors)
  }
  // acrescenta as cores à color-palette
  for (let i = 0; i < n; i += 1) {
    const color = document.createElement('div'); // cria um elemento div
    color.className = 'color'; // atribui a classe .color
    color.style.backgroundColor = (i === 0 ? 'black' : randomColor()); // atribui a cor (o primeiro sempre é black)
    color.addEventListener('click', (event) => { // acrescenta o event listener
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
    palette.appendChild(color); // anexa a color como filha de color-palette
  }
  document.querySelector('.color').classList.add('selected'); // seleciona a primeira cor
}

// createBoard(): cria o tabuleiro de pixels
// o parâmetro n determina o tamanho do tabuleiro (n * n)
function createBoard(n) {
  const board = document.querySelector('#pixel-board'); // obtém o seletor do pixel-board
  while (board.firstChild) {
    board.removeChild(board.lastChild); // remove os filhos (pixels)
  }
  // ajusta o tamanho do #pixel-board
  const size = n * 41;
  board.style.width = `${size}px`;
  board.style.height = `${size}px`;
  // acrescenta os pixels ao pixel-board
  for (let i = 0; i < n ** 2; i += 1) {
    const pixel = document.createElement('div'); // cria um elemento div
    pixel.className = 'pixel'; // atribui a classe .pixel
    pixel.style.backgroundColor = 'white'; // atribui a cor branca
    pixel.addEventListener('click', () => { // acrescenta o event listener
      pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
    board.appendChild(pixel); // anexa o pixel como filho de pixel-board
  }
}

// setButtonCreateBoard(): configura o botão que cria o tabuleiro de pixels
// o tamanho do tabuleiro é obtido do conteúdo do input #board-size, e deve ser entre 5 e 50
// a função também checa a consistência do tamanho contido no input, ajustando-o se necessário
function setButtonCreateBoard() {
  // acrescenta o event listener ao botão #generate-board
  document.querySelector('#generate-board').addEventListener('click', () => {
    // obtém o valor contido no input #board-size
    const input = document.querySelector('#board-size');
    let n = input.value;
    if (n === '') {
      alert('Board inválido!');
      n = 5;
    } else if (n < 5) {
      n = 5;
    } else if (n > 50) {
      n = 50;
    }
    input.value = n;
    // cria o tabuleiro de pixels com tamanho n * n
    createBoard(n);
  });
}

// setButtonClearBoard(): configura o botão que 'limpa' o tabuleiro de pixels
// todos os pixels têm a cor alterada para branco
function setButtonClearBoard() {
  // acrescenta o event listener ao botão
  document.querySelector('#clear-board').addEventListener('click', () => {
    // obtém os filhos de pixel-board (pixels)
    const pixels = document.querySelector('#pixel-board').children;
    // altera a cor de cada pixel para branco
    for (const pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // cria a paleta de cores com 4 elementos
  createPalette(4);
  // cria o tabuleiro de pixels com tamanho 5 x 5
  createBoard(5);
  // configura os event listeners dos botões
  setButtonCreateBoard();
  setButtonClearBoard();
};

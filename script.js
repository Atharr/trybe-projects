// randomColor(): gera uma cor aleatoria no formato rgb(r,g,b)
// cada componente pode variar entre 0 e 255
function randomColor() {
  // gera aleatoriamente cada um dos componentes
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //retorna uma expressão rgb(r,g,b)
  return `rgb(${r},${g},${b})`;
}

// createPalette(): monta a paleta e configura as cores
// o parâmetro n determina quantas cores são adicionadas à paleta
function createPalette(n) {
  // obtém o seletor da #color-palette
  let palette = document.querySelector("#color-palette");
  // remove os filhos (colors)
  while (palette.firstChild) {
    palette.removeChild(palette.lastChild);
  }
  // acrescenta as cores à color-palette
  for (let i = 0; i < parseInt(n); i += 1) {
    let color = document.createElement("div"); // cria um elemento div
    color.className = "color"; // atribui a classe .color
    color.style.backgroundColor = (i === 0 ? "black" : randomColor()); // atribui a cor (o primeiro sempre é black)
    color.addEventListener("click", (event) => { // acrescenta o event listener
      document.querySelector(".selected").classList.remove("selected");
      event.target.classList.add("selected");
    });
    palette.appendChild(color); // anexa a color como filha de color-palette
  }
  // seleciona a primeira cor
  document.querySelector(".color").classList.add("selected");
}

// createBoard(): cria o tabuleiro de pixels
// o parâmetro n determina o tamanho do tabuleiro (n * n)
function createBoard(n) {
  // obtém o seletor do pixel-board
  let board = document.querySelector("#pixel-board");
  // remove os filhos (pixels)
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
  // ajusta o tamanho do pixel-board
  let size = n * 41;
  board.style.width = `${size}px`;
  board.style.height = `${size}px`;
  // acrescenta os pixels ao pixel-board
  for (let i = 0; i < Math.pow(n, 2); i += 1) {
    let pixel = document.createElement("div"); // cria um elemento div
    pixel.className = "pixel"; // atribui a classe .pixel
    pixel.style.backgroundColor = "white"; // atribui a cor branca
    pixel.addEventListener("click", (event) => { // acrescenta o event listener
      pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
    board.appendChild(pixel); // anexa o pixel como filho de pixel-board
  }
}

// executa as funções ao carregar a página
window.onload = () => {
  // cria a paleta de cores com 4 elementos
  createPalette(4);
  // cria o tabuleiro de pixels com tamanho 5 x 5
  createBoard(5);
}

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

// createPalette(): monta a paleta e configura as cores
// o parâmetro n determina quantas cores são adicionadas à paleta
function createPalette(n) {
  const palette = document.getElementById('color-palette'); // obtém o seletor da #color-palette
  while (palette.firstChild) {
    palette.removeChild(palette.lastChild); // remove os filhos (colors)
  }
  const x = Math.floor(Math.random() * n); // sorteia uma cor
  // acrescenta as cores à color-palette
  for (let i = 0; i < n; i += 1) {
    const rnd = randomColor(); // escolhe uma cor aleatória
    const color = document.createElement('div'); // cria um elemento div
    color.className = 'ball'; // atribui a classe .ball
    color.style.backgroundColor = rnd; // atribui a cor aleatória ao elemento
    color.addEventListener('click', (event) => { // acrescenta o event listener
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
    palette.appendChild(color); // anexa a div color como filha de color-palette
    if (i === x) rgbColor.textContent = rnd; // se for a cor sorteada, guarda em rgbColor
  }
}

// executa as funções ao carregar a página
window.onload = () => {
  // obtém o seletor do span #rgb-color
  rgbColor = document.getElementById('rgb-color');
  // cria a paleta de cores com 4 elementos
  createPalette(6);
};

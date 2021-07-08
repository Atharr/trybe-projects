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

// executa as funções ao carregar a página
window.onload = () => {
  // cria a paleta de cores com 4 elementos
  createPalette(4);
}

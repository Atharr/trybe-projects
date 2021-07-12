// setButtonCriar(): configura o botão que gera a carta
function setButtonCriar() {
  // obtém o seletor do parágrafo #carta-gerada
  const cartaTexto = document.getElementById('carta-texto');
  const cartaGerada = document.getElementById('carta-gerada');
  // acrescenta o event listener do botão #criar-carta
  document.getElementById('criar-carta').addEventListener('click', () => {
    while (cartaGerada.firstChild) { // elimina todos os elementos filhos de #carta-gerada
      cartaGerada.removeChild(cartaGerada.lastChild);
    }
    cartaTexto.value.split(' ').forEach((element) => { // separa o texto em um array de palavras
      const span = document.createElement('span'); // cria um elemento span
      span.textContent = element; // atribui ao elemento uma palavra
      cartaGerada.appendChild(span); // acrescenta a palavra ao parágrafo #carta-gerada
    });
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners
  setButtonCriar();
};

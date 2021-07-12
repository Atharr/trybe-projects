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
      texto.forEach((element) => {
        const span = document.createElement('span'); // cria um elemento span
        span.textContent = element; // atribui ao elemento uma palavra
        cartaGerada.appendChild(span); // acrescenta a palavra ao parágrafo #carta-gerada
      });
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

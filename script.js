// setTextInput(): configura o input #text-input
function setTextInput() {
  // acrescenta o event listener do input #text-input
  document.getElementById('text-input').addEventListener('input', (event) => {
    // copia o conteúdo do input para o div #meme-text
    document.getElementById('meme-text').textContent = event.target.value;
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners
  setTextInput();
};

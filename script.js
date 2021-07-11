// setMemeInsert(): configura o input #meme-insert
function setMemeInsert() {
  document.getElementById('meme-insert').addEventListener('change', (event) => {
    // obtém o seletor da img #meme-image
    const memeImage = document.getElementById('meme-image');
    // configura o evento onload de #meme-image para ajustar o container ao tamanho da imagem
    memeImage.onload = ((img) => {
      // obtém o seletor do container #meme-image-container
      const memeImageContainer = document.getElementById('meme-image-container');
      // ajusta as dimensões do container - isso precisa ser feito ao carregar a imagem
      memeImageContainer.style.width = `${img.target.naturalWidth}px`;
      memeImageContainer.style.height = `${img.target.naturalHeight}px`;
    });
    // carrega o arquivo como data blob base64 - ref.: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
    const reader = new FileReader();
    reader.onload = ((a) => (e) => { const x = a; x.src = e.target.result; })(memeImage);
    reader.readAsDataURL(event.target.files.item(0));
  });
}

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
  setMemeInsert();
  setTextInput();
};

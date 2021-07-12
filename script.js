// seletor do container #meme-image-container
let memeImageContainer;

// setContainerSize(event): ajusta #meme-image-container ao tamanho da imagem #meme-image
// isso precisa ser feito no evento onload, pois o tamanho só está definido após a imagem ser carregada!
function setContainerSize(event) {
  // obtém o fator de escala da imagem, caso ela seja menor que o tamanho do container
  const f = 400 / event.target.naturalWidth;
  // obtém as dimensões da imagem, ajustando-as caso necessário (fator de escala > 1)
  const width = (f > 1 ? 400 : event.target.naturalWidth);
  const height = (f > 1 ? Math.floor(event.target.naturalHeight * f) : event.target.naturalHeight);
  // ajusta as dimensões do container - isso precisa ser feito após carregar a imagem
  memeImageContainer.style.width = `${width}px`;
  memeImageContainer.style.height = `${height}px`;
}

// setMemeInsert(): configura o input #meme-insert para que a imagem selecionada seja carregada no container
function setMemeInsert() {
  // acrescenta o event listener do input #meme-insert
  document.getElementById('meme-insert').addEventListener('change', (event) => {
    // obtém o seletor da img #meme-image
    const memeImage = document.getElementById('meme-image');
    // configura o evento onload de #meme-image para ajustar o container ao tamanho da imagem
    memeImage.onload = (setContainerSize);
    // carrega o arquivo como data blob base64 - ref.: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
    const reader = new FileReader(); // cria um novo objeto FileReader
    reader.onload = ((a) => (e) => { const x = a; x.src = e.target.result; })(memeImage); // transfere o resultado da leitura para memeImage
    reader.readAsDataURL(event.target.files.item(0)); // lê o arquivo selecionado na forma de string base64
  });
}

// setTextInput(): configura o input #text-input para que o texto apareça no container da imagem
function setTextInput() {
  // acrescenta o event listener do input #text-input
  document.getElementById('text-input').addEventListener('input', (event) => {
    // copia o conteúdo do input para o div #meme-text
    document.getElementById('meme-text').textContent = event.target.value;
  });
}

// setButtonFire(): configura o botão #fire
function setButtonFire() {
  // acrescenta o event listener do botão #fire
  document.getElementById('fire').addEventListener('click', () => {
    // modifica o estilo do container #meme-image-container
    memeImageContainer.style.setProperty('border', '3px dashed red');
  });
}

// setButtonWater(): configura o botão #water
function setButtonWater() {
  // acrescenta o event listener do botão #water
  document.getElementById('water').addEventListener('click', () => {
    // modifica o estilo do container #meme-image-container
    memeImageContainer.style.setProperty('border', '5px double blue');
  });
}

// setButtonEarth(): configura o botão #earth
function setButtonEarth() {
  // acrescenta o event listener do botão #earth
  document.getElementById('earth').addEventListener('click', () => {
    // modifica o estilo do container #meme-image-container
    memeImageContainer.style.setProperty('border', '6px groove green');
  });
}

// setImgThumbnail(): configura as imagens da classe .thumbnail
function setImgThumbnail() {
  // obtém os seletores das imagens
  [...document.getElementsByClassName('thumbnail')].forEach((element) => {
    // adiciona o event listener a cada thumbnail
    element.addEventListener('click', (event) => {
      // obtém o seletor da img #meme-image e copia a imagem selecionada para ela
      document.getElementById('meme-image').src = event.target.src;
    });
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // obtém o seletor do container #meme-image-container
  memeImageContainer = document.getElementById('meme-image-container');
  // configura os event listeners
  setMemeInsert();
  setTextInput();
  setButtonFire();
  setButtonWater();
  setButtonEarth();
  setImgThumbnail();
};

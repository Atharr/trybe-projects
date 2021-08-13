// Dados da API do MLB
const baseURL = 'https://api.mercadolibre.com/';
// Seletores de objetos do documento
const sel = {};

// totalPrice: objeto que atualiza o preço total do carrinho
const totalPrice = {
  add: (price) => {
    sel.totalPrice.innerText = Math.round((Number(sel.totalPrice.innerText)
      + Number(price)) * 100) / 100;
  }, // soma o preço do item ao total do carrinho
  sub: (price) => {
    sel.totalPrice.innerText = Math.round((Number(sel.totalPrice.innerText)
      - Number(price)) * 100) / 100;
  }, // subtrai o preço o item do total do carrinho
  clear: () => { sel.totalPrice.innerText = '0.00'; }, // limpa o total do carrinho
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  totalPrice.sub(event.target.innerText.split('PRICE: $')[1]); // subtrai o preço do item do total do carrinho
  event.target.parentNode.removeChild(event.target); // o item pede ao elemento-pai que o remova
  localStorage.setItem(0, sel.cartItems.innerHTML); // salva o carrinho no LocalStorage
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// getItem(event): event listener assíncrono para o botão de um item, que acrescenta o item ao carrinho de compras
async function getItem(event) { 
  const itemEndpoint = `${baseURL}items/${getSkuFromProductItem(event.target.parentNode)}`; // monta a query a partir do sku do item
  try {
    const responseRaw = await fetch(itemEndpoint); // busca no endpoint, recebe resultado 'cru'
    const responseJSON = await responseRaw.json(); // converte resultado 'cru' em JSON
    if (responseJSON.error === 'resource not found') { // se o recurso não foi encontrado...
      throw new Error('Item não encontrado!'); // ...envia mensagem de erro
    }
    const item = { sku: responseJSON.id, name: responseJSON.title, salePrice: responseJSON.price }; // obtém id, nome e thumbnail do produto
    sel.cartItems.appendChild(createCartItemElement(item)); // cria o item e o acrescenta à section .items
    totalPrice.add(responseJSON.price); // soma o preço do item ao total do carrinho
    localStorage.setItem(0, sel.cartItems.innerHTML); // salva o carrinho no LocalStorage
  } catch (error) { // em caso de erro...
    alert(`[Erro]: ${error}`); // ...exibe caixa de diálogo com mensagem de erro
  }
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'); // cria botão que adiciona o item ao carrinho
  button.addEventListener('click', getItem); // adiciona event listener ao botão
  section.appendChild(button); // acrescenta o botão à section

  return section;
}

// getProducts(query): função assíncrona que busca produtos na API do MLB e gera itens na página
async function getProducts(query) {
  try {
    const responseRaw = await fetch(query); // busca no endpoint, recebe resultado 'cru'
    const responseJSON = await responseRaw.json(); // converte resultado 'cru' em JSON
    if (!responseJSON.results.length) { // se nenhum resultado foi obtido...
      throw new Error('Nenhum resultado encontrado!'); // ...envia mensagem de erro
    }
    // Cria um elemento para cada produto retornado
    responseJSON.results.forEach((product) => {
      const item = { sku: product.id, name: product.title, image: product.thumbnail }; // obtém id, nome e thumbnail do produto
      sel.items.appendChild(createProductItemElement(item)); // cria o item e o acrescenta à section .items
    });
  } catch (error) { // em caso de erro...
    alert(`[Erro]: ${error}`); // ...exibe caixa de diálogo com mensagem de erro
  }
}

window.onload = () => {
  // Query a ser usada no projeto
  const QUERY = 'computador';
  // Endpoint do MLB
  const endpoint = `${baseURL}sites/MLB/search?q=${QUERY}`;
  
  // Carrega o objeto sel com seletores de elementos do documento
  sel.cartItems = document.querySelector('.cart__items'); // obtém o seletor da ol .cart__items
  sel.items = document.querySelector('.items'); // obtém o seletor da section .items
  sel.totalPrice = document.querySelector('.total-price'); // obtém o seletor do span .total-price
  
  // Busca lista de produtos no endpoint do MLB
  getProducts(endpoint);
  // carrega o carrinho do localStorage
  if (localStorage.length > 0) {
    sel.cartItems.innerHTML = localStorage.getItem(0); // carrega os objetos salvos no LocalStorage
    document.querySelectorAll('.cart__item').forEach((item) =>
      item.addEventListener('click', cartItemClickListener)); // torna a acrescentar o event listener nos itens
  }
};

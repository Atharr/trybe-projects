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

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// getProducts(query): função assíncrona que busca produtos na API do MLB e gera itens na página
async function getProducts(query) {
  try {
    const sectionItems = document.querySelector('.items'); // obtém o seletor da section .items
    const responseRaw = await fetch(query); // busca no endpoint, recebe resultado 'cru'
    const responseJSON = await responseRaw.json(); // converte resultado 'cru' em JSON
    if (!responseJSON.results.length) { // se nenhum resultado foi obtido...
      throw new Error('Nenhum resultado encontrado!'); // ...envia mensagem de erro
    }
    // Cria um elemento para cada produto retornado
    responseJSON.results.forEach((product) => {
      const item = { sku: product.id, name: product.title, image: product.thumbnail }; // obtém id, nome e thumbnail do produto
      sectionItems.appendChild(createProductItemElement(item)); // cria o item e o acrescenta à section .items
    });
  } catch (error) { // em caso de erro...
    alert(`[Erro]: ${error}`); // ...exibe caixa de diálogo com mensagem de erro
  }
}

window.onload = () => {
  // Query a ser usada no projeto
  const QUERY = 'computador';
  // Endpoint do MLB
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  // Busca lista de produtos no endpoint do MLB
  getProducts(endpoint);
};

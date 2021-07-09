// setItemGray(event): atribui a classe .cinza a um elemento
// a função checa se já existe um elemento com essa classe e a remove
function setItemGray(event) {
  // obtém o seletor do item com a classe .cinza
  const itemcinza = document.querySelector('.cinza');
  // se existe um item com a classe aplicada, remove-a
  if (itemcinza) {
    itemcinza.classList.remove('cinza');
  }
  // atribui a classe .cinza ao elemento
  event.target.classList.add('cinza');
}

// setButtonSubmit(): configura o botão que acrescenta tarefas à lista
function setButtonSubmit() {
  // acrescenta o event listener do botão #criar-tarefa
  document.querySelector('#criar-tarefa').addEventListener('click', () => {
    // obtém o seletor do input #texto-tarefa
    const input = document.querySelector('#texto-tarefa');
    // se o input estiver vazio, sai sem fazer nada
    if (input.value.length === 0) {
      return;
    }
    const tarefa = document.createElement('li'); // cria um elemento li
    tarefa.textContent = input.value; // copia o valor do input para a linha...
    input.value = ''; // ...e apaga o input
    // acrescenta o event listener do item da lista
    tarefa.addEventListener('click', setItemGray);
    // obtém o seletor da lista de tarefas e anexa a tarefa como filha
    document.querySelector('#lista-tarefas').appendChild(tarefa);
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners dos botões
  setButtonSubmit();
};

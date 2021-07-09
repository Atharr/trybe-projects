// setItemGray(event): atribui a classe .cinza a um elemento
// a função checa se já existe um elemento com essa classe e a remove
function setItemGray(event) {
  // obtém o seletor do item com a classe .gray
  const grayitem = document.querySelector('.gray');
  // se existe um item com a classe aplicada, remove-a
  if (grayitem) {
    grayitem.classList.remove('gray');
  }
  // atribui a classe .gray ao elemento
  event.target.classList.add('gray');
}

// setItemCompleted(event): atribui/remove a classe .completed a um elemento
// se o elemento não tem a classe atribuída, atribui; se já tem, retira
function setItemCompleted(event) {
  alert('double click');
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
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
    // acrescenta os event listeners do item da lista
    tarefa.addEventListener('click', setItemGray);
    tarefa.addEventListener('dblclick', setItemCompleted);
    // obtém o seletor da lista de tarefas e anexa a tarefa como filha
    document.querySelector('#lista-tarefas').appendChild(tarefa);
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners dos botões
  setButtonSubmit();
};

// variável para guardar o seletor de #lista-tarefas
let listaTarefas;

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
    listaTarefas.appendChild(tarefa);
  });
}

// setButtonSaveList(): configura o botão que salva a lista no web storage
function setButtonSaveList() {
  // obtém o seletor do botão #salvar-tarefas
  const salvar = document.querySelector('#salvar-tarefas');
  // checa se há suporte a web storage
  if (typeof (Storage) !== 'undefined') {
    // acrescenta o event listener do botão #salvar-tarefas
    salvar.addEventListener('click', () => {
      localStorage.setItem(0, listaTarefas.innerHTML);
    });
  } else {
    // desabilita o botão
    salvar.innerHTML = 'Sem suporte a web storage!';
    salvar.disabled = 'disabled';
  }
}

// setButtonClearList(): configura o botão que limpa a lista
function setButtonClearList() {
  // acrescenta o event listener do botão #apaga-tudo
  document.querySelector('#apaga-tudo').addEventListener('click', () => {
    // remove os filhos (tarefas)
    while (listaTarefas.firstChild) {
      listaTarefas.removeChild(listaTarefas.lastChild);
    }
    // apaga o localStorage
    localStorage.clear();
  });
}

// setButtonClearCompleted(): configura o botão que limpa as tarefas completadas
function setButtonClearCompleted() {
  // acrescenta o event listener do botão #remover-finalizados
  document.querySelector('#remover-finalizados').addEventListener('click', () => {
    // obtém os seletores de todos os items com a classe .completed
    const tarefas = document.querySelectorAll('.completed');
    // remove os elementos
    tarefas.forEach((element) => element.parentElement.removeChild(element));
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // obtém o seletor de #lista-tarefas
  listaTarefas = document.querySelector('#lista-tarefas');
  // carrega os objetos salvos no storage
  if (localStorage.length > 0) {
    listaTarefas.innerHTML = localStorage.getItem(0);
  }
  // configura os event listeners dos botões
  setButtonSubmit();
  setButtonSaveList();
  setButtonClearList();
  setButtonClearCompleted();
};

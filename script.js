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
    // copia o valor do input para a linha e apaga o input
    tarefa.textContent = input.value;
    input.value = '';
    // obtém o seletor da lista de tarefas e anexa a tarefa como filha
    document.querySelector('#lista-tarefas').appendChild(tarefa);
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners dos botões
  setButtonSubmit();
};

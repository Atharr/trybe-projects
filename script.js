// setButtonLoginSubmit(): configura o botão do form de login
function setButtonLoginSubmit() {
  // obtém o seletor do botão e acrescenta o event listener
  document.getElementById('login-submit').addEventListener('click', () => {
    const loginNome = document.getElementById('login-nome').value;
    const loginSenha = document.getElementById('login-senha').value;
    if (loginNome === 'tryber@teste.com' && loginSenha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function getFamily() {
  const family = document.getElementsByName('family');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
}

function getSubjects() {
  const subjects = document.getElementsByClassName('subject');
  let subjectsSelected = '';
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      subjectsSelected += `${subjects[i].value}, `;
    }
  }
  return subjectsSelected;
}

function getRate() {
  const rates = document.getElementsByName('rate');
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked) {
      return rates[i].value;
    }
  }
}

// setButtonFormSubmit(): configura o botão de submit do form
function setButtonFormSubmit() {
  // obtém o seletor do botão e acrescenta o event listener
  document.getElementById('submit-btn').addEventListener('click', () => {
    // obtém o seletor do form #evaluation-form
    const form = document.getElementById('evaluation-form');
    // obtém os valores dos campos
    const nome = document.getElementById('input-name').value;
    const sobrenome = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const casa = document.getElementById('house').value;
    const familia = getFamily();
    const materias = getSubjects();
    const avaliacao = getRate();
    const textarea = document.getElementById('textarea').value;
    // preenche o conteúdo do form
    form.innerHTML = `Nome: ${nome} ${sobrenome}<br>Email: ${email}<br>Casa: ${casa}<br>`;
    form.innerHTML += `Família: ${familia}<br>Matérias: ${materias}<br>Avaliação: ${avaliacao}<br>`;
    form.innerHTML += `Observações: ${textarea}<br>`;
  });
}

// setCheckAgreement(): configura o checkbox #agreement para habilitar o botão de submit
function setCheckAgreement() {
  // obtém o seletor do checkbox #agreement e acrescenta o event listener
  document.getElementById('agreement').addEventListener('click', (event) => {
    // obtém o seletor do botão #submit-btn e habilita-o caso o checkbox esteja selecionado
    document.getElementById('submit-btn').disabled = !event.target.checked;
  });
}

// setTextArea(): configura a textarea para atualizar o contador #counter
function setTextArea() {
  // obtém o seletor da textarea e acrescenta o event listener
  document.getElementById('textarea').addEventListener('input', (event) => {
    // obtém o atributo maxlength da textarea
    const maxLength = event.target.getAttribute('maxlength');
    // guarda no span #counter a diferença entre maxLength e o tamanho atual do texto
    document.getElementById('counter').textContent = maxLength - event.target.value.length;
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners
  setButtonLoginSubmit();
  setButtonFormSubmit();
  setCheckAgreement();
  setTextArea();
};

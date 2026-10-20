// Lista com os nomes adicionados ao sorteio
let listaDeNomes = [];

const campoNome = document.getElementById('nome');
campoNome.value = ''; // iniciar campo sem valor

// Permite adicionar o nome pressionando Enter
campoNome.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarNome();
    }
});

function adicionarNome() {
    const nomeDigitado = campoNome.value.trim();

    if (nomeDigitado === '') {
        mensagemErro('Por favor, insira um nome válido.');
        return;
    }

    const nomeJaExiste = listaDeNomes.some(
        (nome) => nome.toLowerCase() === nomeDigitado.toLowerCase()
    );
    if (nomeJaExiste) {
        mensagemErro(`O nome "${nomeDigitado}" já foi adicionado.`);
        return;
    }

    listaDeNomes.push(nomeDigitado);
    limparMensagem();
    limparResultado();
    atualizarLista();

    campoNome.value = '';
    campoNome.focus();
}

function sortearNome() {
    if (listaDeNomes.length === 0) {
        mensagemErro('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    limparMensagem();
    const indiceEscolhido = Math.floor(Math.random() * listaDeNomes.length);
    exibeNome(listaDeNomes[indiceEscolhido]);
}

//==================ESPACO AUXILIAR==============

function atualizarLista() {
    const listElement = document.getElementById('listaNomes');
    listElement.innerHTML = '';

    listaDeNomes.forEach((nome) => {
        const listItem = document.createElement('li');
        listItem.textContent = nome;
        listElement.appendChild(listItem);
    });

    const total = listaDeNomes.length;
    document.getElementById('contador').textContent =
        total === 1 ? '1 nome adicionado' : `${total} nomes adicionados`;
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = '';
}

function mensagemErro(mensagem) {
    limparResultado();
    const elemento = document.getElementById('mensagem');
    elemento.textContent = mensagem;
    elemento.hidden = false;
    campoNome.focus();
}

function limparMensagem() {
    document.getElementById('mensagem').hidden = true;
}

function exibeNome(nome) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const listItem = document.createElement('li');
    listItem.textContent = `O nome sorteado é: ${nome}`;
    resultado.appendChild(listItem);
}

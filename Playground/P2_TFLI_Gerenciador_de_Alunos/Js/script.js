const btnTema = document.getElementById('btnTema');
const iconeSol = document.getElementById('iconeSol');
const iconeLua = document.getElementById('iconeLua');
const htmlElement = document.documentElement;

const temaPreferido = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
htmlElement.setAttribute('data-theme', temaPreferido);

if (temaPreferido === 'dark') {
    iconeSol.style.display = 'block';
    iconeLua.style.display = 'none';
} else {
    iconeSol.style.display = 'none';
    iconeLua.style.display = 'block';
}

btnTema.addEventListener('click', () => {
    const temaAtual = htmlElement.getAttribute('data-theme');
    if (temaAtual === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        iconeSol.style.display = 'none';
        iconeLua.style.display = 'block';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        iconeSol.style.display = 'block';
        iconeLua.style.display = 'none';
    }
});

let alunos = [];

window.onload = function() {
    let nome = prompt("Qual o seu nome?");
    if (nome) {
        document.getElementById("titulo").innerHTML = "Bem-vindo, " + nome + "!";
    }
};

function formatarTexto() {
    let input = document.getElementById("nome-aluno");
    input.value = input.value.toUpperCase();
}

function adicionarAluno() {
    let input = document.getElementById("nome-aluno");
    if (input.value.trim() !== "") {
        alunos.push(input.value);
        input.value = "";
        mostrarLista();
        mostrarMensagem("Aluno adicionado!");
    } else {
        alert("O campo não pode ser vazio.");
    }
}

function removerAluno() {
    if (alunos.length > 0) {
        alunos.pop();
        mostrarLista();
        mostrarMensagem("Removido!");
    }
}

function inverterLista() {
    alunos.reverse();
    mostrarLista();
}

function mostrarLista() {
    let area = document.getElementById("lista-alunos");
    area.innerHTML = alunos.length > 0 ? alunos.join("<br>") : "A lista está vazia.";
}

const mostrarMensagem = (texto) => {
    let msg = document.getElementById("mensagem");
    msg.innerHTML = texto;
    setTimeout(() => { msg.innerHTML = ""; }, 2000);
};

function mudarCor() {
    let area = document.getElementById("lista-alunos");
    area.style.color = area.style.color === "blue" ? "inherit" : "blue";
}

function ligarDesligar() {
    let btn = document.getElementById("btn-power");
    let container = document.getElementById("container");
    if (btn.innerHTML === "Desligar Sistema") {
        btn.innerHTML = "Ligar Sistema";
        container.style.opacity = "0.2";
        container.style.pointerEvents = "none";
        btn.style.pointerEvents = "auto";
    } else {
        btn.innerHTML = "Desligar Sistema";
        container.style.opacity = "1";
        container.style.pointerEvents = "auto";
    }
}
let alunos = [];

window.onload = function() {
    let nome = prompt("Qual o seu nome?");
    if (nome !== "" && nome !== null) {
        document.getElementById("titulo").innerHTML = "Bem-vindo, " + nome + "!";
    }
};

function formatarTexto() {
    let input = document.getElementById("nome-aluno");
    input.value = input.value.toUpperCase();
}

function adicionarAluno() {
    let input = document.getElementById("nome-aluno");
    let nome = input.value;

    if (nome !== "") {
        alunos.push(nome);
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
        mostrarMensagem("Último aluno removido!");
    }
}

function inverterLista() {
    if (alunos.length > 0) {
        alunos.reverse();
        mostrarLista();
        mostrarMensagem("Lista invertida!");
    }
}

function mostrarLista() {
    let area = document.getElementById("lista-alunos");
    if (alunos.length > 0) {
        area.innerHTML = alunos.join("<br>");
    } else {
        area.innerHTML = "A lista está vazia.";
    }
}

const mostrarMensagem = (texto) => {
    let msg = document.getElementById("mensagem");
    msg.innerHTML = texto;
    setTimeout(() => {
        msg.innerHTML = "";
    }, 2000);
};

function mudarCor() {
    let area = document.getElementById("lista-alunos");
    if (area.style.color === "blue") {
        area.style.color = "black";
    } else {
        area.style.color = "blue";
    }
}

function ligarDesligar() {
    let btn = document.getElementById("btn-ligar");
    let container = document.getElementById("container");

    if (btn.innerHTML === "Desligar") {
        btn.innerHTML = "Ligar";
        document.body.style.backgroundColor = "#555";
        container.style.opacity = "0.3";
    } else {
        btn.innerHTML = "Desligar";
        document.body.style.backgroundColor = "white";
        container.style.opacity = "1";
    }
}
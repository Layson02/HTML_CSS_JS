const display = document.getElementById('display-array');
const tabela = document.getElementById('tabela-metodos');
const inputSetup = document.getElementById('input-setup');
const btnSetup = document.getElementById('btn-setup');
const btnReset = document.getElementById('btn-reset');

const PADRAO = ["Maçã", "Banana", "Uva"];
let frutas = [...PADRAO];

function atualizarPagina() {
    display.innerText = JSON.stringify(frutas);
}

function criarLinha(metodo, inputs, acao, explicacao) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><code>${metodo}</code></td>
        <td>${inputs}</td>
        <td><button onclick="${acao}">Executar</button></td>
        <td class="desc">${explicacao}</td>
    `;
    tabela.appendChild(tr);
}

btnSetup.onclick = function() {
    if (inputSetup.value) {
        frutas = inputSetup.value.split(',').map(item => item.trim());
        atualizarPagina();
    }
};

btnReset.onclick = function() {
    frutas = [...PADRAO];
    atualizarPagina();
};

function executarPush() {
    const val = document.getElementById('in-push').value;
    if (val) {
        frutas.push(val);
        atualizarPagina();
    }
}

function executarPop() {
    const val = document.getElementById('in-pop').value;
    if (val === "") {
        frutas.pop();
    } else {
        frutas.splice(parseInt(val), 1);
    }
    atualizarPagina();
}

function executarUnshift() {
    const val = document.getElementById('in-unshift').value;
    if (val) {
        frutas.unshift(val);
        atualizarPagina();
    }
}

function executarSlice() {
    const i = document.getElementById('in-slice-1').value;
    const f = document.getElementById('in-slice-2').value;
    alert("Resultado Slice: " + JSON.stringify(frutas.slice(parseInt(i), parseInt(f))));
}

function executarJoin() {
    const sep = document.getElementById('in-join').value;
    alert("Resultado Join: " + frutas.join(sep));
}

function executarConcat() {
    const val = document.getElementById('in-concat').value;
    const novo = frutas.concat(val.split(',').map(i => i.trim()));
    alert("Novo Array (Concat): " + JSON.stringify(novo));
}

function executarForEach() {
    let result = [];
    frutas.forEach(item => result.push(item.toUpperCase()));
    alert("ForEach (Maiúsculas): " + JSON.stringify(result));
}

criarLinha('push', '<input id="in-push" class="input-small" placeholder="item">', 'executarPush()', 'Adiciona ao final.');
criarLinha('pop', '<input id="in-pop" class="input-small" placeholder="id">', 'executarPop()', 'Remove o último ou índice específico.');
criarLinha('reverse', '', 'frutas.reverse(); atualizarPagina();', 'Inverte a ordem atual.');
criarLinha('shift', '', 'frutas.shift(); atualizarPagina();', 'Remove o primeiro item.');
criarLinha('slice', '<input id="in-slice-1" class="input-small"> <input id="in-slice-2" class="input-small">', 'executarSlice()', 'Copia uma parte do array.');
criarLinha('sort', '', 'frutas.sort(); atualizarPagina();', 'Ordena alfabeticamente.');
criarLinha('unshift', '<input id="in-unshift" class="input-small" placeholder="item">', 'executarUnshift()', 'Adiciona ao início.');
criarLinha('concat', '<input id="in-concat" class="input-wide" placeholder="item1, item2">', 'executarConcat()', 'Gera novo array combinado.');
criarLinha('join', '<input id="in-join" class="input-small" placeholder="sep">', 'executarJoin()', 'Cria string com separador.');
criarLinha('forEach', '', 'executarForEach()', 'Aplica função em cada item.');

atualizarPagina();
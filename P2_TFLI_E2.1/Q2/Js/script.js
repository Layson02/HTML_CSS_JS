const NOME_LOJA = "TechStore";
var taxaDesconto = 0.10;

function processarCompra(produtoEscolhido, precoOriginal) {
    let nomeCliente = prompt(`Você escolheu ${produtoEscolhido}.\nQual é o seu nome?`);
    
    if (!nomeCliente) {
        alert("Compra cancelada.");
        return;
    }

    let idadeStr = prompt("Qual é a sua idade?");
    let idadeCliente = parseInt(idadeStr);

    if (isNaN(idadeCliente)) {
        alert("Idade inválida. Compra cancelada.");
        return;
    }

    let valorDesconto = precoOriginal * taxaDesconto;
    let precoFinal = precoOriginal - valorDesconto;
    let mensagemPromocional = "";
    let mensagemFrete = "";

    if (idadeCliente > 30) {
        mensagemPromocional = "Promoção especial para clientes acima de 30 anos: Desconto extra de R$ 50,00!";
        precoFinal -= 50;
    } else {
        mensagemPromocional = "Obrigado por escolher a TechStore, jovem tech!";
    }

    if (precoFinal > 1000) {
        mensagemFrete = "Você ganhou FRETE GRÁTIS por comprar acima de R$ 1000!";
    } else {
        mensagemFrete = "Frete fixo de R$ 30,00 adicionado.";
        precoFinal += 30;
    }

    let resumoCompra = `--- Resumo da Compra ---\n` +
                       `Loja: ${NOME_LOJA}\n` +
                       `Cliente: ${nomeCliente} (Idade: ${idadeCliente} anos)\n` +
                       `Produto: ${produtoEscolhido}\n` +
                       `Preço Original: R$ ${precoOriginal.toFixed(2)}\n` +
                       `------------------------\n` +
                       `${mensagemPromocional}\n` +
                       `${mensagemFrete}\n` +
                       `------------------------\n` +
                       `TOTAL A PAGAR: R$ ${precoFinal.toFixed(2)}`;

    document.getElementById("resultado").innerText = resumoCompra;
    alert(resumoCompra);
}
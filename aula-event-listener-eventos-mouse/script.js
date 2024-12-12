let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizaDom() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
atualizaDom();
//--------variables--------//

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01");
console.log(btnAddProduto01);
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");
console.log(quantidadeProduto01);

let btnRemProduto01 = document.querySelector("#btn-subtrair-produto-01");
console.log(btnRemProduto01);

let valorProduto = 11.66;

//----------fuction--------//

function adicionarUm() {
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;

  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

  subtotalInfo.valor = subtotalInfo.valor + valorProduto;

  atualizaDom();
}

function subtrairUm() {
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
    subtotalInfo.valor = subtotalInfo.valor - valorProduto;
    atualizaDom();
  }
}

//---------events--------//
btnAddProduto01.addEventListener("click", adicionarUm);

btnRemProduto01.addEventListener("click", subtrairUm);

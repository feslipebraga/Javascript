let cotacao = Number(prompt("Quanto está a cotação do dolar neste momento?"))

function botao(){
    let dinheiro = Number(prompt("Quantos R$ você deseja converter?"))
    let conversao = cotacao * dinheiro
    let dinheiro2 = dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let conversao2 = conversao.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
    let resultado = document.querySelector("p#p")
    resultado.innerHTML = `Com ${dinheiro2}, você consegue trocar por ${conversao2}.`
}
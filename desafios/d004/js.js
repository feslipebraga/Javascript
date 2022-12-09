function botao(){
    let produto = prompt("Qual produto você está comprando?")
    let preco = Number(prompt(`Qual o valor de ${produto}?`))
    let dinheiro = Number(prompt(`Quanto você deu em dinheiro?`))
    let troco = (dinheiro - preco)
    let preco2 = preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let dinheiro2 = dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let troco2 = troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    alert(`Você comprou um ${produto} que custou ${preco2}.
Deu ${dinheiro2} em dinheiro e vai receber ${troco2} de troco.
Volte sempre!`)
}
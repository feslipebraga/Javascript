function botao(){
    let produto = prompt("Qual é o produto que você está comprando?")
    let prec = Number(prompt(`Qual o preço de ${produto}?`))
    let preco = prec.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let desc = (prec * 0.1)
    let desconto = desc.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let precFin = (prec - desc)
    let precoFinal = precFin.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let resultado = document.querySelector('p#res')
    resultado.innerHTML = `<b>Calculando desconto de 10% para ${produto}</b>
<p>O preço original era ${preco}</p>
<p>Você acaba de ganhar ${desconto} de desconto (-10%).</p>
<p>No fim, você vai pagar ${precoFinal} no produto ${produto}.</p>`
}
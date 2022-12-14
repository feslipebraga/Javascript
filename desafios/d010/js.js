function botao(){
    let a = Number(prompt(`Qual é o valor de a? `))
    let b = Number(prompt(`Qual é o valor de b? `))
    let c = Number(prompt(`Qual é o valor de c? `))
    let delta = (b ** 2) - (4 * a * c)
    let resp = document.getElementById('res')
    resp.innerHTML = `A equação atual é: <b>${a}x² + ${b}x + ${c} = 0</b>
    <p>O cálculo realizado será <b>Δ = ${b}² – 4 . ${a} . ${c}</b>
    <p>O valor calculado foi <mark><b>Δ = ${delta}</b></mark>`
}
function botao(){
    let funcionario = prompt('Qual é o nome do funcionário?')
    let funcionario2 = funcionario.charAt(0).toUpperCase() + funcionario.slice(1)
    let salario = Number(prompt(`Qual o salário de ${funcionario}?`))
    let salario2 = salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let reajuste = Number(prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`))
    let aumento = salario * (reajuste/100)
    let aumento2 = aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let salarioFinal = salario + aumento
    let salarioFinal2 = salarioFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let resultado = document.querySelector("p#res")
    resultado.innerHTML = `<b>${funcionario2} recebeu um aumento salarial!</b>
<p>O salário atual era ${salario2}</p>
<p>Com um aumento de ${reajuste}%, o salário vai aumentar ${aumento2} no próximo mês.</p>
<p>E a partir daí, ${funcionario2} comecará a ganhar ${salarioFinal2} por mês.</p>`
}
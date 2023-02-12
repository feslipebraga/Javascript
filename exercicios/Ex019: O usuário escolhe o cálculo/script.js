let texto = document.getElementById('txt')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')

function iniciar(){
    let calculo = document.getElementsByName('calculo')
    if (calculo[0].checked){
        let soma = Number(n1.value) + Number(n2.value)
        texto.innerHTML = `A soma dos valores digitados é ${soma}`
    } else if (calculo[1].checked){
        let subt = Number(n1.value) - Number(n2.value)
        texto.innerHTML = `A subtração dos valores digitados é ${subt}`
    } else if (calculo[2].checked){
        let mult = Number(n1.value) * Number(n2.value)
        texto.innerHTML = `A multiplição dos valores digitados é ${mult}`
    } else if (calculo[3].checked){
        let div = Number(n1.value) / Number(n2.value)
        texto.innerHTML = `A divisão dos valores digitados é ${div}`
    }
}
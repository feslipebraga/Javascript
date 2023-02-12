function verificar(){
    let num = document.getElementById('num')
    let numero = Number(num.value)
    let num2 = document.getElementById('num2')
    let numero2 = Number(num2.value)
    let texto = document.getElementById('txt')
    let maior = 0
    let menor = 0
    if (numero > numero2){
        maior = numero
        menor = numero2
    } else {
        maior = numero2
        menor = numero
    }
    texto.innerHTML = `<p>Analisando os valores acima...
<p>O maior valor é o ${maior}
<p>O menor é o ${menor}`
}
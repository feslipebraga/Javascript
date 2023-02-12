var texto = document.getElementById('txt')

let minino = 1
let maximo = 100
let diferenca = maximo - minino
let aleatorio = Math.random()
let numero = minino + Math.trunc(diferenca * aleatorio)

function adivinhar(){
    texto.innerHTML = numero
    let palpite = prompt('Dê o seu palpite:')
    if (palpite > numero){
        texto.innerHTML += `<p>Você chutou ${palpite}! É um número <b>MENOR!</b>`
    } else if (palpite < numero){
        texto.innerHTML += `<p>Você chutou ${palpite}! É um número <b>MAIOR!</b>`
    } else {
        texto.innerHTML += `<p><b>PARÁBENS!</b> Você acertou! Eu tinha pensado no número ${numero}! \u{1F47E}`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}
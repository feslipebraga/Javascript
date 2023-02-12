var texto = document.getElementById('txt')

function clique(){
    let minino = 1
    let maximo = 100
    let diferenca = maximo - minino
    let aleatorio = Math.random()
    let numero = minino + Math.trunc(diferenca * aleatorio)
    texto.innerHTML += `<p>Pensei no número ${numero} \u{1F4AC}`
}

function limpar(){
    texto.innerHTML = null
}
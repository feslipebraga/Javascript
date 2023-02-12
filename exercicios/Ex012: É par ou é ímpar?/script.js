function verificar(){
    let numero = document.getElementById('num')
    let texto = document.getElementById('txt')
    let resultado = 0
    if (numero.value % 2 == 0){
        resultado = 'par'
    } else {
        resultado = 'ímpar'
    }
    texto.innerHTML = `O número ${numero.value} é ${resultado}`
}
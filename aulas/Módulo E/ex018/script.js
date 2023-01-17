function gerarTabuada(){
    let n = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')
    if (n.value.length == 0){
        alert('Por favor, digite um número.')
    } else {
        let numero = Number(n.value)
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            let linha = document.createElement('option')
            linha.text = `${numero} x ${c} = ${numero*c}`
            linha.value = `tabuada${c}` // isso fará sentido em PHP, em JS o 'value' não interfere no resultado.
            tabuada.appendChild(linha)
        }
    }
}
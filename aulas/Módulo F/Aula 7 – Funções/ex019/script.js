let numero = document.getElementById('number')
let texto = document.getElementById('txt')
let tabela = document.getElementById('tabela')
let valores = []

function numeroValido(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, lista){
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (numeroValido(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let linha = document.createElement('option')
        linha.text = `Valor ${numero.value} adicionado`
        tabela.appendChild(linha)
        texto.innerHTML = ''
    } else{
        alert('numero invalido')
    }
}

function finalizar(){
    if (valores.length == 0){
        alert('selection vazia')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        for (let x in valores){
            soma = soma + valores[x]
            if(valores[x] > maior){
                maior = valores[x]
            } else if (valores[x] < menor){
                menor = valores[x]
            }
        }
        var media = soma / total
    }
        if(total == 1){
            texto.innerHTML = `<p>No total, foi inserido ${total} elemento.`
        } else {
            texto.innerHTML = `<p>No total, foram inseridos ${total} elementos.`
        }
        texto.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        texto.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        texto.innerHTML += `<p>A soma dos valores listados é ${soma}</p>`
        texto.innerHTML += `<p>A média é ${media}</p>`
}
function contar(){
    var aux1 = document.getElementById('inicio')
    var inicio = Number(aux1.value)
    var aux2 = document.getElementById('fim')
    var fim = Number(aux2.value)
    var aux3 = document.getElementById('passo')
    var passo = Number(aux3.value)
    var texto = document.getElementById('msg')
    if (aux1.value.length == 0 || aux2.value.length == 0 || aux3.value.length == 0){
        texto.innerHTML = '[ERRO] Faltam dados! \u{1F63E}'
    } else if(passo <= 0){
        texto.innerHTML = `PASSO INVÁLIDO \u{1F9D0}`
    } else{
        texto.innerHTML = 'Contando... <br>'
        if (inicio < fim){
            // CONTAGEM CRESCENTE
            for(var c = inicio; c <= fim; c += passo){
                texto.innerHTML += `${c} \u{1F922} `
            }
        } else if (fim < inicio){
            // CONTAGEM DECRESCENTE
            for(var c = inicio; c >= fim; c -= passo){
                texto.innerHTML += `${c} \u{1F922} `
            }
        }
        texto.innerHTML += 'END \u{1F92E}'
    }
}
function contagemProgressiva(inicio, fim){
    for (let x = inicio; x <= fim; x++){
        if (x < fim){
            texto.innerHTML += ` ${x} 👉`
        } else {
            texto.innerHTML += ` ${x} 🏁`
        }
    }
}

function contagemRegressiva(inicio, fim){
    for (let x = inicio; x >= fim; x--){
        if (x > fim){
            texto.innerHTML += ` ${x} 👉`
        } else {
            texto.innerHTML += ` ${x} 🏁`
        }
    }
}

let texto = document.getElementById('saida')
function contar(){
    let valorInical = Number(document.getElementById('valorInicial').value)
    let valorFinal = Number(document.getElementById('valorFinal').value)
    if (valorInical < valorFinal) {
        texto.innerHTML = `<p><h2>CONTANDO DE ${valorInical} ATÉ ${valorFinal}</h2></p>`
        contagemProgressiva(valorInical, valorFinal)
    } else if (valorInical > valorFinal) {
        texto.innerHTML = `<p><h2>CONTANDO DE ${valorInical} ATÉ ${valorFinal}</h2></p>`
        contagemRegressiva(valorInical, valorFinal)
    } else {
        window.alert('ERRO! Digite valores válidos ou não repita o mesmo número!')
    }
}  
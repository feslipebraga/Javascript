let texto = document.getElementById('saida')
function calcular(){
    let numero = Number(document.getElementById('numero').value)
    texto.innerHTML = `<h2> TABUADA DE ${numero}</h2>`
    for (let x = 1; x <= 10; x++){
        texto.innerHTML += `<p>${numero} x ${x} = ${numero*x}</p>`
    }
}  
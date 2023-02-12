let texto = document.getElementById('txt')

function contar(){
    texto.innerHTML = null
    let passo = 10
    for (var i = 1; i <= passo; i++) {
        if (i % 2 == 0 && i != passo){
            texto.innerHTML += ` ${i} 👉`
        } else if (i % 2 == 0 && i == passo) {
            texto.innerHTML += ` ${i} 🏁`
        }
    }
}
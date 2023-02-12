let texto = document.getElementById('txt')

function contar(){
    texto.innerHTML = null
    let passo = 10
    for (var i = 1; i <= passo; i++) {
        if (i < passo){
            if (i % 2 == 0){
                texto.innerHTML += `<mark>${i}</mark> 👉`
            } else {
                texto.innerHTML += ` ${i} 👉`
            }
        } else {
            if (i % 2 == 0){
                texto.innerHTML += `<mark>${i}</mark> 🏁`
            } else {
                texto.innerHTML += `${i} 🏁`
            }
        }
    }
}
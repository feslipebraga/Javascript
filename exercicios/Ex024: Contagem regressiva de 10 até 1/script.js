let texto = document.getElementById('txt')

function contar(){
    texto.innerHTML = null
    for (var i = 10; i >= 1; i--) {
        if (i <= 10 && i > 1){
            texto.innerHTML += ` ${i} 👉`
        } else {
            texto.innerHTML += `${i} 🏁`
        }
    }
}
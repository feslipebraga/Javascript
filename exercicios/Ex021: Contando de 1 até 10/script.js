let texto = document.getElementById('txt')

function contar(){
    texto.innerHTML = null
    for (var i = 1; i <= 10; i++) {
        if (i < 10){
            texto.innerHTML += ` ${i} 👉`
        } else {
            texto.innerHTML += `${i} 🏁`
        }
    }
}
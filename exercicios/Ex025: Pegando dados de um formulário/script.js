function contar(){
    let texto = document.getElementById('saida')
    let numero = Number(document.getElementById('numero').value)
    if (numero === 0){
        window.alert('ERRO, digite um valor válido!')
    } else{
        texto.innerHTML = `<p><h2>CONTANDO DE 0 ATÉ ${numero}</h2></p>`
        for (let x = 0; x <= numero; x++){
            if (x < numero){
                texto.innerHTML += ` ${x} 👉`
            } else {
                texto.innerHTML += ` ${x} 🏁`
            }
        }
    }
}
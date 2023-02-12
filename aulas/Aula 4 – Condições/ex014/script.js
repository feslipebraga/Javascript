function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var txt = document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente: ${hora}h${minuto}`
    if (hora >= 6 && hora < 12) {
        img.src = 'fotos/manha.png'
        txt.innerHTML = 'Bom dia'
        document.body.style.background = '#FFD700'
    } else if (hora >= 12 && hora < 18){
        img.src = 'fotos/tarde.png'
        txt.innerHTML = 'Boa tarde'
        document.body.style.background = '#FA8072'
    } else {
        img.src = 'fotos/noite.png'
        txt.innerHTML = 'Boa noite'
        document.body.style.background = '#483D8B'
    }
}
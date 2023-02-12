function verificar(){
    var aux1 = document.getElementById('nascimento')
    var anoNascimento = Number(aux1.value)
    var tamanho = aux1.value.length
    var aux2 = new Date()
    var anoAtual = aux2.getFullYear()
    var idade = anoAtual - anoNascimento
    if(tamanho === 0 || anoNascimento > anoAtual){
        alert('ERRO! Digite um ano de nascimento válido.')
    }
    var sexo = document.getElementsByName('sexo')
    var texto = document.getElementById('mensagem')
    texto.style.textAlign = 'center'
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked){
        var genero = 'homem'
        texto.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos</p>`
        if (idade <= 10){
            img.setAttribute('src', 'fotos/m1.png')
        } else if (idade <= 17){
            img.setAttribute('src', 'fotos/m2.png')
        } else if (idade <= 40){
            img.setAttribute('src', 'fotos/m3.png')
        } else {
            img.setAttribute('src', 'fotos/m4.png')
        }
    } else if(sexo[1].checked){
        var genero = 'mulher'
        texto.innerHTML = `<p>Detectamos uma ${genero} com ${idade} anos</p>`
        if (idade <= 10){
            img.setAttribute('src', 'fotos/f1.png')
        } else if (idade <= 17){
            img.setAttribute('src', 'fotos/f2.png')
        } else if (idade <= 40){
            img.setAttribute('src', 'fotos/f3.png')
        } else {
            img.setAttribute('src', 'fotos/f4.png')
        }
    }
    texto.appendChild(img)
}
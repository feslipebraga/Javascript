function calcularMedia(){
    var aux0 = document.getElementById('aluno')
    var aux1 = document.getElementById('nota1')
    var aux2 = document.getElementById('nota2')
    var aluno = String(aux0.value)
    var nota1 = Number(aux1.value)
    var nota2 = Number(aux2.value)
    var media = (nota1 + nota2) / 2
    if (media >= 0 && media < 7){
        var mensagem = "Estude um pouco mais, você não passou! :("
    } else if (media >= 7 && media <= 10){
        var mensagem = "Parabéns, você está aprovado! :)"
    } else{
        var mensagem = 'Você digitou valores inválidos. Tente novamente!'
    }
    var texto = document.getElementById('texto')
    texto.innerHTML = `<p>Calculando a média final de ${aluno}...</p>
    <p>As notas obtidas foram ${nota1} e ${nota2}</p>
    <p>A média final será ${media}</p>
    <p>A mensagem que temos é: <b style='color:red' b> ${mensagem}</p>`
}

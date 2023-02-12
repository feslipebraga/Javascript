function verificar(){
    let texto = document.getElementById('txt')
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let diaSemana = data.getDay()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    texto.innerHTML = `<p>Dia: ${dia}</p>
    <p>Mês: ${meses[mes]}</p>
    <p>Ano: ${ano}</p>
    <p>Dia da Semana: ${semana[diaSemana]}</p>
    <p>Hora: ${hora}</p>
    <p>Minutos: ${minutos}</p>
    <p>Segundos: ${segundos}</p>`
}

function entrar(){
    var caixa = document.getElementById('caixa')
    caixa.style.background = 'blue'
}

function sair(){
    caixa.style.background = 'red'
}
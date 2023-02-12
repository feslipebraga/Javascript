function calcular(){
    let texto = document.getElementById('txt')
    let ano = document.getElementById('ano')
    let data = new Date()
    let anoAtual = data.getFullYear()
    let idade = anoAtual - Number(ano.value)
    texto.innerHTML = `Quem nasceu em ${ano.value}, em ${anoAtual} completará ${idade} anos.`
}
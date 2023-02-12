let texto = document.getElementById('txt')
let mes = document.getElementById('mes')

function estacao(){
    let estacao = ''
    switch (mes.value.toUpperCase()) {
        case 'JANEIRO':
        case 'FEVEREIRO':
        case 'MARÇO':
            estacao = 'VERÃO'
            break;
        case 'ABRIL':
        case 'MAIO':
        case 'JUNHO':
            estacao = 'OUTONO'
            break;
        case 'JULHO':
        case 'AGOSTO':
        case 'SETEMBRO':
            estacao = 'INVERNO'
            break;
        case 'OUTUBRO':
        case 'NOVEMBRO':
        case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break;
        default:
            estacao = 'indefinido'
            break;
    }
    texto.innerHTML = `${mes.value.toUpperCase()} = ${estacao}`
}
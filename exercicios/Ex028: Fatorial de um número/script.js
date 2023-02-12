function fatorial(n){
    let fat = 1
    texto.innerHTML += `${n}! = `
    for (let x = n; x >= 1; x--){
        fat *= x
        if (x > 1){
            texto.innerHTML += `${x} x `
        } else {
            texto.innerHTML += `${x} = <mark>${fat}</mark>.`
        }
    }
}

function fatorialRecursividade(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorialRecursividade(n-1)
    }
}

let texto = document.getElementById('saida')
function calcular(){
    let numero = Number(document.getElementById('numero').value)
    texto.innerHTML = `<h2> FATORIAL DE ${numero}!</h2>`
    for (let x = numero; x >= 1; x--){
        if (x > 1){
            texto.innerHTML += `${x} x `
        } else {
            texto.innerHTML += `${x} = <mark>${fatorialRecursividade(numero).toLocaleString()}</mark>`
        }
    }
}
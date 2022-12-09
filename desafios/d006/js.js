function botao(){
    let temperaturaC = Number(prompt('Digite uma temperatura em ˚C'))
    let temperaturaK = temperaturaC + 273.15
    let temperaturaF = (temperaturaC * (9/5)) + 32
    let resultado = document.querySelector("p#p")
    resultado.innerHTML = `<b>A temperatura de ${temperaturaC}˚C, corresponde a...</b> <p>${temperaturaK}˚K Kelvin</p> <p>${temperaturaF}˚F Fahrenheit</p>`
}
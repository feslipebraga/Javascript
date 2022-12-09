function botao(){
    let m = Number(prompt("Digite uma distância em metros (m)"))
    let km = m / 1000
    let hm = m / 100
    let dam = m / 10
    let dm = m * 10
    let cm = m * 100
    let mm = m * 1000
    let resultado = document.querySelector("p#p")
    resultado.innerHTML = `<b>A distância de ${m} metros, corresponde a...</b> <p>${km} km</p> <p>${hm} hm</p> <p>${dam} dam</p> <p>${dm} dm</p> <p>${cm} cm</p> <p>${mm} mm</p>`
}
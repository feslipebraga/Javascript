function clique() {
    let numero = Number(window.prompt("Informe um numero."))
    let sucessor = numero + 1
    let antecessor = numero - 1
    window.alert(`Antes de ${numero}, temos o número ${antecessor}.
Depois de ${numero}, temos o número ${sucessor}.`)
}


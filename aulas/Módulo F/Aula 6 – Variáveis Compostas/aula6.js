var numeros = [11, 8, 2, 9, 3]

numeros[3] = 6      // substitui o conteudo do elemento no indice 3
numeros.push(10)    // adiciona um valor a lista
numeros.length      // tamanho da lista
numeros.indexOf(3) // procura o valor 3 dentro do array e mostra a posicao como resultado, -1 caso nao encontre

numeros.sort(function(a,b){return a-b})      // organiza em ordem crescente numeros
console.log(numeros)
console.log(`O vetor possui ${numeros.length} elementos`)
console.log(`O primeiro valor do vetor é ${numeros[0]}`)

for (var x = 0; x < numeros.length; x++){       // funciona em variaveis simples
    console.log(`Na posicao ${x} tem o valor ${numeros[x]}`)
}

for(var c in numeros){          // funciona em listas, variaveis compostas
    console.log(numeros[c])
}

let n = 5
let num = numeros.indexOf(n)
if (num == -1){
    console.log('O valor não se encontra na lista.')
} else {
    console.log(`O valor ${n} está na posicao ${num}`)
}

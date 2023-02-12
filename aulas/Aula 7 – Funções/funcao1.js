function parImpar(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

let num = 5
let res = parImpar(num)

console.log(`O valor ${num} é ${res}`)
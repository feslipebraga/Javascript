// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(num){
    let fat = 1
    for (let c = num; c > 1; c--){
        fat = fat * c
    }
    return fat
}

console.log(fatorial(5))
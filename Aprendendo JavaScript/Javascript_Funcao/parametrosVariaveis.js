

function soma(){
    let soma = 0
    for(i in arguments){ // toda funcção tem esse array disponivel arguments
        soma += arguments[i]
    }
    return soma
}
soma() // posso parar varios parametros.
console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4))
console.log(soma(1.1,2,2.2,3))
console.log(soma(1.1,2,2.2,3, "teste"))

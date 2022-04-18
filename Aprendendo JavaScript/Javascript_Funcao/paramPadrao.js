

// estrategia 1 para gerar valor padrão.


function soma1(a,b,c){
    a = a || 1 // caso nulo, undefinet ou 0 vai ser false e vai retornar 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log("estrategia 1 ----------------")
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))

// estrategia 2 para gerar valor padrão.
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // vejo se no array arguments no indice 1 existe o valor de b
    c = isNaN(c) ? 1 : c  // funcao verifica se a variavel e um numero.
    return a + b + c
}

console.log("estrategia 2 ----------------")
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

// valor padrão do ES2015 - melhor forma
function soma3(a = 1, b = 1 ,c =1 ){    
    return a+b+c
}

console.log("estrategia 3 ----------------")
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))
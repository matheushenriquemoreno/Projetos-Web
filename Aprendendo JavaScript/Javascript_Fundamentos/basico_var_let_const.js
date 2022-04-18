    
    /* o nome das variaveis são muitos importantes */

var a = 3  
let b = 4 /* use let*/

var a = 30
b = 40 

if(true){

    var teste1 = 9  
    let teste2 = 10 
    const teste3 = 100

    console.log("escopo if " + teste1)
    console.log("escopo if" + teste2)
    console.log("escopo if" + teste3)
}


console.log("roi, estou sendo acesada globalmente " + teste1)
//console.log("roi, não sendo acesada globalmente " + teste2) vai dar erro pois não pode ser acessada globalmente, pois possue escopo de bloco, mesma coisa pra const.
//console.log("roi, estou sendo acesada globalmente " + teste3)


console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5 /* Tudo aquilo que não tem motivo para mudar coloque constante. */  

console.log(c)



// função em JavaScript é First-class Objetct // higher-order function



// criar de forma literal

// toda função sem retorno em Js retorna undefined.
function funcao1() {

}


// Armazenar em uma variável

const fun2 = function () {}

// Armazenar em um array

const array = [function(a,b) {return a + b}, funcao1, fun2]
console.log("retorno funcao arraY = " + array[0](2,3))

// Armazenar em um atribulo de objeto
const pessoa = {nome:"matheus"}
pessoa.falar = function() {return "diga meu rei"}
console.log(pessoa.falar()) 


// passar função como parrametro
function funcaoComoParametro(fun){
    fun()
}

funcaoComoParametro(function () { console.log('executando..') })

// uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
//executando a função
soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)




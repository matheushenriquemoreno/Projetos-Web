// função anonima => Arrow

let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // chamando assim o retorno fica implicito

console.log("funcao dobro ", dobro(Math.PI))

HelloWord = () => 'olá'
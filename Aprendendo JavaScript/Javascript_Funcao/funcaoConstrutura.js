// molde dos objetos, => classe
function Carro(velocidadeMaxima = 200, delta = 5){
   
    // atributo privado
    let velocidadeAtual = 0

    // metodo public
    this.Acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo public // this torna publica
    this.getVelocidadeAtual = () => velocidadeAtual
}


const uno = new Carro
uno.Acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.Acelerar()
ferrari.Acelerar()
ferrari.Acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
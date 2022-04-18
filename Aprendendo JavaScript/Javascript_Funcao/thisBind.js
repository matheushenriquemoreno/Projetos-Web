
const pessoa = {
    saudacao: 'bom dia!', 
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() // conflito entre paradigmas: funcionao e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //  bind metodo resposavel de amarar um objeto, para resolver o problema do "this"

falarDePessoa()


// aula 2


// exemplo usando uma constante para pegar o this
function Pessoa1() {
    this.idade = 0

    const self = this // instancia altual que no caso e a pessoa 

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa1

// exemplo usando a função bind para pegar o this.
function Pessoa2() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade, typeof(this))
    }.bind(this) , 1000)
}

new Pessoa2
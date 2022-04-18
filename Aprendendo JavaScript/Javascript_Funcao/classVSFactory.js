class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log("meu nome é", this.nome)
    }
}

const p1 = new Pessoa('joão')

//função factory
const CriarPessoa = nome => {
    return {
        falar: () => console.log("meu nome e ", nome)
    }
}

const p2 = CriarPessoa("matheus")

p1.falar()
p2.falar()

// funcao Construtora
function CriaPessoas(nome){
    this.falar = () => console.log("Meu nome e ", nome)
}

const p3 = new CriaPessoas("fernando")
p3.falar()


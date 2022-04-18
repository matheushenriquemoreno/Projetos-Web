// recurso ES2015

const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        longradouro: 'rua abc',
        numero: 1000
    }
}


const { nome, idade } = pessoa

console.log(nome,idade)
console.log(pessoa)





function getPreco(imposto = 0, moeda = 'R$'){
return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}` // 4500 * 0.90 * 1.10 =
}

const produto = {
    nome: 'notebook',
    preco: 4500,
    desconto: 0.10,
    getPreco
}


console.log(produto.getPreco())


const carro = {preco: 5000, desconto: 0.20}
// forma diferente de chamar um função
console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro)) 

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.call(carro, [0.17, '$'])) // espera os parametros entro do array
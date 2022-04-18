function criarProduto(nome, preco, categoria){
    let desconto = 0.10
 
    return {
        nome: nome,
        preco: preco -= (desconto * preco),
        categoria: categoria
    }
}

 const vetorProdutos = []


for(let i = 1; i <= 5; i++){
    vetorProdutos.push(criarProduto(`caro ${i}`, i + 000, "Automoveis"))
}


let produto1 = criarProduto("siena", 1000, "carro")
let produto2 = criarProduto("argo", 4000, "carro")

vetorProdutos.push(produto1)
vetorProdutos.push(produto2)


vetorProdutos.forEach(item => console.log(item))



        
let valor // não inicialidazada
console.log(valor) // undefined = valor nao inicializado e nem definido, propriedade não existe.

valor = null // null = possue endereço de memoria ela existe mais não possue valor // ausência de valor

console.log(valor)
// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)

// delete produto.preco /* forma correta de retirar um atributo de um objeto */ 

console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)


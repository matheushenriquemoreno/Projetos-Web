const fabricantes = ["mercedes", "audi", "BMw"]

function imprimir(nome, indice){
    console.log(`${indice + 1}, ${nome}`)
}


console.log("--------------------------")
fabricantes.forEach(imprimir)

console.log("--------------------------")
fabricantes.forEach(function(item) {
    console.log(item)
})

console.log("--------------------------")
fabricantes.forEach(item => console.log(item))



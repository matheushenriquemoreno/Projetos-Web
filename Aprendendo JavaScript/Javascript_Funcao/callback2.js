const notas = [7.7,6.6,5.2,8.9,3.6,7.1,6.9,8.8,10,9,7.7]

// sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback

let notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)
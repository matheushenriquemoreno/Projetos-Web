const nome = 'Rebeca'
const contatenacao = 'ola ' + nome + '!'
const template =  `
        Olá 
        ${nome}!`

console.log(contatenacao, template)


// expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
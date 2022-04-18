const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
    const valor2 = 'escopo local'
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec()
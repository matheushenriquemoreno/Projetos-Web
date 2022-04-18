// closure é o escopo criado quando uma fução e declarada
// esse escpo permite a função acessar e manipular varáveis externas á função 


// contexto léxico em ação!

const x = 'Global'

function fora(){
    
    const x = 'local'
 
    function dentro(){  // a função tem ciencia do local onde foi criada.
        return x
    }

    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())
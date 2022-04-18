console.log(soma(3,4))
//console.log(sub(3,4)) // erro


// function declaration -- tem acesso a função em qualquer lugar do codigo.
function soma(x,y){
    return x+y
}

// function expression -- tem acesso a função somente apos ela ser declarada.
const sub = function(x,y){
    return x - y
}

console.log(sub(3,4))

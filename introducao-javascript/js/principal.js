console.log("ola feio");
console.log(document);
let titulo = document.querySelector(".titulo"); // document.querySelector("h1");
titulo.textContent = "atualizou";



let botaoCalculaImc = document.querySelector("#calcularImc")


botaoCalculaImc.addEventListener("click", function () {

    let vetorpacientes = document.querySelectorAll(".paciente"); // traz um array 

    console.log(vetorpacientes)
    
    for(let i = 0; i < vetorpacientes.length; i++){
        
        // pego o peso de cada paciente percorrendo o vetor
        let peso = vetorpacientes[i].querySelector(".info-peso").textContent;
        // pego a altura de cada paciente
        let altura = vetorpacientes[i].querySelector(".info-altura").textContent;
        // pego o campo do icm de cada paciente
        let campoImc = vetorpacientes[i].querySelector(".info-imc");
    
        // verificações
        if(!validaPeso(peso)){
            campoImc.textContent = "verificar os valores para peso!"
            vetorpacientes[i].classList.add("paciente-invalido")
        }
        else if(!validaAltura(altura)){
            campoImc.textContent = "verificar os valores para altura!"
            vetorpacientes[i].classList.add("paciente-invalido")
        }
        else{
            campoImc.textContent = calculaImc(peso, altura);
        }
    }

})


function validaPeso(peso){
    if(peso >= 0 && peso < 250){
      return true  
    }
    return false
}


function validaAltura(altura){
    if(altura > 0 && altura <= 2.5){
        return true
    }
    return false
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}










// adicionando evento.

// usando função anonima
titulo.addEventListener("click",function () {
    window.location.href = "http://www.devmedia.com.br"
})

/* usando função normal
titulo.addEventListener("click",redireciona)
function redireciona() {
    window.location.href = "http://www.devmedia.com.br"
}
*/




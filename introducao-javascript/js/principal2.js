
let botaoCalculaImc = document.querySelector("#calcularImc")


botaoCalculaImc.addEventListener("click", function () {

    const array = retornaArrayPaciente();
    


    let alterar = document.querySelectorAll(".paciente");

    alterar.forEach(function(valor){

        array.forEach(function(paciente) {

            if(verificaValoresPesoAltura(paciente.peso, paciente.altura, paciente.imc)){
                paciente.imc.classList.add("paciente-invalido")
            }
            valor.imc.textContent = paciente.imc
        })
      
    })
})

function retornaArrayPaciente(){

    let vetorpacientes = document.querySelectorAll(".paciente"); // traz um array 

     let pacientes = []
    
    for(let i = 0; i < vetorpacientes.length; i++){
        
        let paciente = {
            nome: vetorpacientes[i].querySelector(".info-nome").textContent,
            peso: vetorpacientes[i].querySelector(".info-peso").textContent,
            altura: vetorpacientes[i].querySelector(".info-altura").textContent,
            gordura: vetorpacientes[i].querySelector(".info-gordura").textContent,
            imc: calculaImc(vetorpacientes[i].querySelector(".info-peso").textContent, vetorpacientes[i].querySelector(".info-altura").textContent)
        }

        pacientes.push(paciente)
    }

    return pacientes
}

function verificaValoresPesoAltura(peso, altura,campoImc){

    if(peso < 0 || peso > 250){
        campoImc.textContent = "verificar os valores para peso!"
        return true;
    }
   if(altura < 0 || altura > 2.5){
        campoImc.textContent = "verificar os valores para altura!"
       return true;
    }
  return false;
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}




var filtro = document.querySelector("#filtrar-tabela")
console.log(filtro)

filtro.addEventListener("input", function(){

    let nomeDigitado = this.value

    var pacientes = document.querySelectorAll(".paciente")
    


    if(this.value.length > 0){
    pacientes.forEach(function(item){

        var nomePaciente = item.querySelector(".info-nome").textContent

        var expressao = new RegExp(nomeDigitado,"i")
        if(!expressao.test(nomePaciente)){
            item.classList.add("invisivel")
        }else{
            item.classList.remove("invisivel")
        }
    })
    }
    else{
        pacientes.forEach(function(item){
            item.classList.remove("invisivel")
        })
    }
})

/*
 new RegExp(nomeDigitado,"i")
 O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado)
 e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).
*/

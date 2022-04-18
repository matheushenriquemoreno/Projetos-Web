
// requisição assincrona com AJAX

var botaoAdicionar = document.querySelector("#Buscar-paciente")

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        if(this.status == 200){
            var pacientes = JSON.parse(xhr.responseText)

            pacientes.forEach(function(iten){
                adicionaPacienteNaTabela(iten)
            })
        }else{
            console.log(xhr.status)
            console.log(xhr.status.responseText)
        }
    });
    
    xhr.send();

    console.log();
})
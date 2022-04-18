
/*

DELEGEAÇÃO DE EVENTO: O evento vai subindo pra todo mundo que e pai dele, exempo:

temos uma tabela e os filhos dela sao as tr, e td, então quando executar um evento nelas a tabela vai escutar.


*/ 


let pacientes = document.querySelectorAll(".paciente")
console.log(pacientes)

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(evento){
    console.log(evento.target) // quem foi o alvo do evento.
    
    let alvoEvento = evento.target // td
    let paiDoEvento = alvoEvento.parentNode // Tr

    paiDoEvento.classList.add("fadeOut")

    setTimeout(function(){
        paiDoEvento.remove()
    },800)
    
})


/*
pacientes.forEach(function(item) {
 item.addEventListener("dblclick", function() {
    this.remove(); // acesso a propriedade item, pois ela estra atrelada ao item 
 })
})*/
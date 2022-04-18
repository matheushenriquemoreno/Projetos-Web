
let butaoAdicionar = document.querySelector("#adicionar-paciente")

butaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault() // previne o comportamento padrao
    
    const formulario = document.querySelector("#form-adiciona")
    
    let paciente = obtemPacienteDoFormulario(formulario)

    let erro = validaPaciente(paciente)

    if(erro.length > 0){
        console.log(erro)
        exibeMensagensDeErro(erro)
        return;
    }

    adicionaPacienteNaTabela(paciente)
    // adicionando o paciente na tabela


    formulario.reset()
    limpaMensagens()
})

function adicionaPacienteNaTabela(paciente){
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(montaTr(paciente))
}

function obtemPacienteDoFormulario(formulario){
    
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value,formulario.altura.value)
    }
    return paciente
}

function montaTr(paciente){

   var pacienteTr = document.createElement("tr")
   pacienteTr.classList.add("paciente")

   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
   pacienteTr.appendChild(montaTd(paciente.imc), "info-imc")

    return pacienteTr
}

function montaTd(dado,classe){
    let td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){

    let erros = []

    if(!validaPeso(paciente.peso))
        erros.push("Peso é inválido!")
    
    if(!validaAltura(paciente.altura))
        erros.push("Altura é inválida!")

    if(verificaStringVazia(paciente.nome))
        erros.push("o nome não pode ser em branco")
    
    if(verificaStringVazia(paciente.gordura))
        erros.push("A gordura precisa ser preenchida")
    
    if(verificaStringVazia(paciente.peso))
        erros.push("O peso precisa ser preenchida")

    if(verificaStringVazia(paciente.altura) )
        erros.push("A Algura precisa ser preenchida")

    return erros
}


function verificaStringVazia(string){
    if(string.length == 0){
        return true
    }
    return false
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#menssagem-erro")

    ul.innerHTML = ""

    erros.forEach(function(erro) {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function limpaMensagens(){
var mensagens = document.querySelector("#menssagem-erro")
mensagens.innerHTML = ""
}
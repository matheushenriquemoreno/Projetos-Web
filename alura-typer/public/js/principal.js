const textArea = $(".campo-digitacao")


/* quando tudo e carregado na pagina realiza os comportamentos passados*/
$(function () {
    console.log("Pagina Carregou")
    inicializaContadores()
    inicializaCronometro()

    /*Eventos*/
    $("#reinicia-jogo").on("click", reiniciaJogo)

    $("#Copiar-Area").on("click", function () {
        var texto = $("#Texto-Copiar").text();

        navigator.clipboard.writeText(texto);
    })
})

const setaSegundos = () => $("#segundos").text('6');

function reiniciaJogo() {
    textArea.val('')
    textArea.attr("disabled", false);
    $("#contadorCaracteres").text('0')
    $("#contadorPalavras").text('0')
    textArea.toggleClass("desabilitaCampo")
    textArea.removeClass("campo-correto")
    textArea.removeClass("campo-errado")

    setaSegundos()
    inicializaCronometro()
}


const inicializaContadores = () => {
    textArea.on("input click", (e) => {
        const conteudo = retornaRetornaValorDigitado().trim()
        $("#contadorCaracteres").text(conteudo.length)
        $("#contadorPalavras").text(contaPalavras(conteudo))

        comparaValorDigitadoComFrase()
    })
}

function inicializaCronometro() {
    var tempo = $("#segundos").text()

    textArea.one("focus", function () {
        desabilitaBotaoReinicia();
        var idSetInterval = setInterval(function () {

            tempo--;

            $("#segundos").text(tempo);

            if (tempo < 1) {
                clearInterval(idSetInterval);
                FinalizaJogo();
            }
        }, 1000);
    })
}



function FinalizaJogo() {
    textArea.attr("disabled", true);
    textArea.toggleClass("desabilitaCampo")
    insereNoPlacar();
}


function comparaValorDigitadoComFrase() {

    const fraseTela = $(".frase").text()

    let valorDigitado = retornaRetornaValorDigitado()

    const digitandoCerto = fraseTela.startsWith(valorDigitado)

    if (digitandoCerto) {
        textArea.addClass("campo-correto")
        textArea.removeClass("campo-errado")
    }
    else {
        textArea.addClass("campo-errado")
        textArea.removeClass("campo-correto")
    }
}


function insereNoPlacar() {
    /* placar e a section, e atraves dos filhos pego o tbody*/

    var corpoTabela = $(".Placar").find("tbody");
    
    /*Pego valores*/
    var nome = "matheus"
    var numeroPalavras = $("#contadorPalavras").text()
    var caracteres = $("#contadorCaracteres").text()

    /*Monto as tags <td> que vão ser inseridos em uma <tr> pra logo a frente inserir no <tbody> da tabela*/
    var tdNome = $('<td>').html(nome)
    var tdNumeroPalavras = $('<td>').html(numeroPalavras)
    var tdcaracteres = $('<td>').html(caracteres)

    var tr = $('<tr>').append(tdNome, tdNumeroPalavras, tdcaracteres)     
    
    corpoTabela.prepend(tr);
}


function desabilitaBotaoReinicia() {
    $("#reinicia-jogo").attr("disabled", true)
}
function ativaBotaoReinicia() {
    $("#reinicia-jogo").attr("disabled", false)
}

const contaPalavras = (frase) => {
    return frase.split(/\S+/).length - 1
}

const numeroCaracteres = (tag) => {
    return $(tag).text().trim().length
}

$("#tamano-frase").text(contaPalavras($(".frase").text()));
$("#qtd-caracter").text(numeroCaracteres(".frase"));


const retornaRetornaValorDigitado = () => $(".campo-digitacao").val()


/*
.val() da acesso ao valor de um input que possue value exmplo text, number etc...
*/ 
function novoElemento(tagName, className){
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo: borda)
    this.elemento.appendChild(reversa ? borda: corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreiras(altura, abertura, x){

    this.barreiras = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.barreiras.appendChild(this.superior.elemento)
    this.barreiras.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura) // 700 - 200 500/ 6 * 500 
        console.log("alturaSuperior " + alturaSuperior)
        const alturaInferior = altura - abertura - alturaSuperior
        console.log("alturaInferior " + alturaInferior)
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.barreiras.style.left.split('px')[0]) // retorna a posição da barreira

    this.setX = (x) => this.barreiras.style.left = `${x}px`
    
    this.getLargura = () => this.barreiras.clientWidth

    this.sortearAbertura()
    this.setX(x)
}
/*
const b = new ParDeBarreiras(700,200,400)

document.querySelector('[wm-flappy]').appendChild(b.barreiras)
*/

 // vai se utilizar reaproveitamento das barreira fazendo assim um loop entre elas

function Barreiras(altura, largura, abertura, espaco, notificarPonto){

    this.pares = [
        new ParDeBarreiras(altura,abertura,largura),
        new ParDeBarreiras(altura,abertura,largura + espaco),
        new ParDeBarreiras(altura,abertura,largura + espaco * 2),
        new ParDeBarreiras(altura,abertura,largura + espaco * 3)
    ]

    const desclocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - desclocamento)

            // quando o elemento sair da área do jogo
            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio =  par.getX() + desclocamento >= meio && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

const barreiras = new Barreiras(700, 1100, 200, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.barreiras))

setInterval(() => {
    barreiras.animar()
}, 20)

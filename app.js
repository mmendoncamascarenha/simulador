/**
 * Simulador dos Operadores lógicos AND - OR - NOT
 * @author Murillo Mendonça Mascarenha
 */

let receive // armazena o parâmetro(valor recebido do html)
//as variaveis a baixo sao usadas para identificar se o interruptor esta ligado ou desligado (false=desligado | true = ligado)
let sw1 = false
let sw2 = false

//a variavel abaixo é usada para identificar se a lampada esta quebrada 
let broken = false


function sw(receive) {
    //console.log(receive) //apoio a logica 


    //logica para os interruptores
    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    }
    if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }

    //logica para quebrar a lampada
    if (receive === 3) {

        //a linha abaixo cria um objeto usando a classe audio 
        let som = new Audio()
        console.log(typeof (som))
        som.src = "sound/glassbreaking.wav"
        som.play()
        // trocar a imagem (manipulação do DOM)
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

    //logica para o operador AND
    if (broken !== true)
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img//off.jpg"
        }
}

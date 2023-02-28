let quadrados = document.querySelectorAll(".quadrado")

let simboloNoQuadrado = [" ", " ", " "," ", " ", " ", " ", " ", " "]

let simbolos = ["O","X"]

let vezDoJogador = 0

let jogadasFeitas = 0

let umClick = new Map()

let jogadaVitoriosa = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let fimDeJogo = false

let placarInicialO = 0

let placarInicialX = 0




function definirSimbolo(umDosQuadrados){

    if (fimDeJogo) return

    if (simboloNoQuadrado[umDosQuadrados] == " "){ 
    simboloNoQuadrado[umDosQuadrados] = simbolos[vezDoJogador]

    fimDeJogo = acabou()
    if (fimDeJogo == false){

    if (vezDoJogador == 0) {vezDoJogador = 1}
     else {vezDoJogador = 0}
    
}}
    return fimDeJogo

}


function acabou(){

    for (let i=0; i<jogadaVitoriosa.length; i++){

        let sequencia = jogadaVitoriosa[i]

        let posicao1 = sequencia[0]
        let posicao2 = sequencia[1]
        let posicao3 = sequencia[2]

        if (simboloNoQuadrado[posicao1] == simboloNoQuadrado[posicao2] &&
            simboloNoQuadrado[posicao1] == simboloNoQuadrado[posicao3] &&
            simboloNoQuadrado[posicao1] != " ")
        return true
    }
        return false
}




document.addEventListener('DOMContentLoaded', () =>{

quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", click)
})
})


quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", () => {
        if (!umClick.has(quadrado)){
            jogadasFeitas++
            umClick.set(quadrado, true)
        } 
    })
})


function resetarEmpate(quadrado){
    umClick.set(quadrado, false)
}

function click(quadradoClicado){
    let quadrado = quadradoClicado.target
    let umDosQuadrados = quadrado.id 

    
    if (definirSimbolo(umDosQuadrados)){
        setTimeout(() => {
            alert("Fim de jogo! O ganhador Foi o " + simbolos[vezDoJogador])
            50
        })

        if (simbolos[vezDoJogador] == "O") {placarInicialO++} else{placarInicialX++}
        
        atualizarPlacar()

    } else{


    if (jogadasFeitas == 9){ 
        setTimeout(() => {
        alert("Tivemos um empate!")
        50
    })
        
    }}


    adicionarSimbolo()
}


document.querySelector("#botao1").addEventListener("click", () =>{
    novaPartida()
})


document.querySelector("#botao2").addEventListener("click", () =>{
    resetarPlacar()
})


function resetarPlacar(){
     placarInicialO = 0

     placarInicialX = 0

     placarO.innerText = placarInicialO

     placarX.innerText = placarInicialX
}


function adicionarSimbolo(){

    quadrados.forEach((quadrado) => {
        let umDosQuadrados = quadrado.id
        let simbolo = simboloNoQuadrado[umDosQuadrados]

        if (simbolo != " "){
            quadrado.innerText = simbolo
        }
    })
}


function atualizarPlacar(){

    if (simbolos[vezDoJogador] == "O" ){
        placarO.innerText = placarInicialO
    } else{
        placarX.innerText = placarInicialX
    }
}


function novaPartida(){
    simboloNoQuadrado = [" ", " ", " "," ", " ", " ", " ", " ", " "]

    fimDeJogo = false

    vezDoJogador = 0

    jogadasFeitas = 0

    umClick = new Map()
    
  for (i=0; i<quadrados.length; i++){
    quadrados[i].innerText = " "
  }
}
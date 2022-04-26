let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado");

function calcular() {
    
    let qdtAdultos  = inputAdultos.value;
    let qdtCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP (duracao) * qdtAdultos + (carnePP (duracao) / 2 * qdtCriancas);
    let qdtTotalCerveja = cervejaPP (duracao) * qdtAdultos;
    let qdtTotalBebidas = bebidasPP(duracao) * qdtAdultos + (carnePP (duracao) / 2 * qdtCriancas);


    resultado.innerHTML = `<p>${qdtTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas/1000}L de Bebidas</p>`
}

function carnePP (duracao) {
    if (duracao >= 6) {
        return 650
    }
    else {
        return 400
    }
}

function cervejaPP (duracao) {
    if (duracao >= 6) {
        return 2000
    }
    else {
        return 1200
    }
}

function bebidasPP (duracao) {
    if (duracao >= 6) {
        return 1500
    }
    else {
        return 1000
    }
}
"use strict"

const states = {
    1: 'Acre',
    2: 'Alagoas',
    3: 'Amapá',
    4: 'Amazonas',
    5: 'Bahia',
    6: 'Ceará',
    7: 'Distrito Federal',
    8: 'Espírito Santo',
    9: 'Goiás',
    10: 'Maranhão',
    11: 'Mato Grosso',
    12: 'Mato Grosso do Sul',
    13: 'Minas Gerais',
    14: 'Pará',
    15: 'Paraíba',
    16: 'Paraná',
    17: 'Pernambuco',
    18: 'Piauí',
    19: 'Rio de Janeiro',
    20: 'Rio Grande do Norte',
    21: 'Rio Grande do Sul',
    22: 'Rondônia',
    23: 'Roraima',
    24: 'Santa Catarina',
    25: 'São Paulo',
    26: 'Sergipe',
    27: 'Tocantins'
}

const statsterritory = {
    0: "territorios/Acre.png",
    1: "territorios/Alagoas.png",
    2: "territorios/Amapá.png",
    3: "territorios/Amazonas.png",
    4: "territorios/Bahia.png",
    5: "territorios/Ceará.png",
    6: "territorios/DistritoFederal.png",
    7: "territorios/EspíritoSanto.png",
    8: "territorios/Goiás.png",
    9: "territorios/Maranhão.png",
    10: "territorios/MatoGrosso.png",
    11: "territorios/MatoGrossoSul.png",
    12: "territorios/MinasGerais.png",
    13: "territorios/Pará.png",
    14: "territorios/Paraíba.png",
    15: "territorios/Paraná.png",
    16: "territorios/Pernambuco.png",
    17: "territorios/Piauí.png",
    18: "territorios/RioJaneiro.png",
    19: "territorios/RioGrandeNorte.png",
    20: "territorios/RioGrandeSul.png",
    21: "territorios/Rondônia.png",
    22: "territorios/Roraima.png",
    23: "territorios/SantaCatarina.png",
    24: "territorios/SãoPaulo.png",
    25: "territorios/Sergipe.png",
    26: "territorios/Tocantins.png"
}

let NumberRandom = Math.round(Math.random() * 26)

console.log(NumberRandom)


$("#localimage").append(`<img src="${statsterritory[NumberRandom]}" alt="" id="imgstate"></img>`)

console.log("Sai daqui seu curioso!")
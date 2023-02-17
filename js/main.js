const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const robotron = document.querySelector("#robotron");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const cores = {
    "1": "img/robotronPreto.png",
    "2": "img/robotronBranco.png",
    "3": "img/robotronAzul.png",
    "4": "img/robotronVermelho.png",
    "5": "img/robotronRosa.png",
    "6": "img/robotronAmarelo.png",
}

var idCor = 0;

controle.forEach((controle) => {
    controle.addEventListener("click", (evento) => {
        calcularEstatisticas(evento);
        manipularDados(evento);
    })
})

function manipularDados(eventoElement) {
    const input = eventoElement.target.parentNode.querySelector("[data-contador]");
    const operacao = eventoElement.target.dataset.controle;

    if (operacao === "+") {
        input.value = parseInt(input.value) + 1;
    } else if (operacao === "-") {
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
        }
    }
    else {
        console.log("Operação inválida");
    }
}

function calcularEstatisticas(peca) {
    const item = peca.target.dataset.peca;
    const operacao = peca.target.dataset.controle;
    const input = peca.target.parentNode.querySelector("[data-contador]");

    estatisticas.forEach((elemento,) => {
        if (operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + parseInt(pecas[item][elemento.dataset.estatistica]);
        } else if (operacao === "-") {
            if (parseInt(input.value) > 0) {
                elemento.textContent = parseInt(elemento.textContent) - parseInt(pecas[item][elemento.dataset.estatistica]);
            } else {
                console.log("Não há mais " + item + " para serem removidos");
            }
        }
    })
}


robotron.addEventListener("click", () => {
    corDoRobo();
});
function corDoRobo() {
    idCor = idCor + 1;
    if  (6 < idCor) {
    idCor = 1
    }     
    robotron.src = cores[idCor]; 
}

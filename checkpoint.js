let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function microondas(opcao, tempo) {
    //Opções da pipoca
    if (opcao === "pipoca" && tempo > 3 * pipoca) {
        console.log("Kabuummm!!");
    } else if (opcao === "pipoca" && tempo > 2 * pipoca) {
        console.log("Comida queimada");
    } else if (opcao === "pipoca" && tempo < pipoca) {
        console.log("tempo insuficiente");
    }
    //Opções do macarrão
    else if (opcao === "macarrao" && tempo > 3 * macarrao) {
        console.log("Kabuummm!!");
    } else if (opcao === "macarrao" && tempo > 2 * macarrao) {
        console.log("Comida queimada");
    } else if (opcao === "macarrao" && tempo < macarrao) {
        console.log("tempo insuficiente");
    }
    //Opções do carne
    else if (opcao === "carne" && tempo > 3 * carne) {
        console.log("Kabuummm!!");
    } else if (opcao === "carne" && tempo > 2 * carne) {
        console.log("Comida queimada");
    } else if (opcao === "carne" && tempo < carne) {
        console.log("tempo insuficiente");
    }
    //Opções do feijão
    else if (opcao === "feijao" && tempo > 3 * feijao) {
        console.log("Kabuummm!!!");
    } else if (opcao === "feijao" && tempo > 2 * feijao) {
        console.log("Comida queimada");
    } else if (opcao === "feijao" && tempo < feijao) {
        console.log("tempo insuficiente");
    }
    //Opções do brigadeiro
    else if (opcao === "brigadeiro" && tempo > 3 * brigadeiro) {
        console.log("Kabuummm!!");
    } else if (opcao === "brigadeiro" && tempo > 2 * brigadeiro) {
        console.log("Comida queimada");
    } else if (opcao === "brigadeiro" && tempo < brigadeiro) {
        console.log("tempo insuficiente");
    } else if (
        opcao != "brigadeiro" &&
        opcao != "carne" &&
        opcao != "macarrao" &&
        opcao != "feijao" &&
        opcao != "pipoca"
    ) {
        console.log("prato inexistente");
    } else {
        console.log("Prato pronto, bom apetite");
    }
}
microondas("pipoca", 10);

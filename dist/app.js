"use strict";
// -----------------------  VARIÁVEIS -----------------------
function variaveis() {
    let nome = "Íris";
    let idade = 24;
    let maiorIdade = true;
    console.log(nome);
    console.log(idade);
    console.log(maiorIdade);
}
function somar(valor1, valor2) {
    return console.log("Soma:", valor1 + valor2);
}
// variaveis();
// somar(5, 5)
// -----------------------  ARRAYS -----------------------
function array() {
    let array = [];
    array.push(1);
    array.push(2);
    console.log(array);
    let array2 = [10, 15, 20];
    console.log(array2);
    let array3 = [100, 150, "teste"];
    array3.push(1);
    array3.push("teste 2");
    console.log(array3);
}
// array();
// -----------------------  ARRAYS COM TYPE -----------------------
function arrayType() {
    let a = [1, 2, 3, "exemplo"];
    let b = ["exemplo", "exemplo", 5, 10, 15];
    console.log(a, b);
}
// arrayType();
// -----------------------  OBJETOS -----------------------
function obj() {
    let cachorro;
    cachorro = {
        nome: "Tom",
        idade: 2
    };
    console.log(cachorro);
    let gata = { nome: "Sarita" };
    console.log(gata);
}
// obj();
// ----------------------- ENUM -----------------------
var produtoStatus;
(function (produtoStatus) {
    produtoStatus[produtoStatus["Disponivel"] = 1] = "Disponivel";
    produtoStatus[produtoStatus["Indisponivel"] = 2] = "Indisponivel";
    produtoStatus[produtoStatus["Nao_Existe"] = 3] = "Nao_Existe";
})(produtoStatus || (produtoStatus = {}));
function checarStatus(status) {
    switch (status) {
        case produtoStatus.Disponivel:
            console.log('Produto disponível');
            break;
        case produtoStatus.Indisponivel:
            console.log('Produto indisponível');
            break;
        case produtoStatus.Nao_Existe:
            console.log('Produto não existe');
            break;
    }
}
// checarStatus(1)
// checarStatus(produtoStatus.Indisponivel)
// checarStatus(3)
function interfaceCarro() {
    let carro = {
        marca: "Ford",
        modelo: "F250",
        ligado: false,
        velocidade: 0,
        ligar() {
            this.ligado = true;
            return console.log(`O carro ${this.modelo} está ligado!`);
        },
        acelerar() {
            this.velocidade += 10;
            return console.log(`Você está acelerando. Velocidade atual: ${this.velocidade}`);
        },
        frear() {
            this.velocidade -= 10;
            return console.log(`Você está freando. Velocidade atual: ${this.velocidade}`);
        },
        desligar() {
            this.velocidade = 0;
            this.ligado = false;
            return console.log(`Carro ${this.modelo} está ${this.ligado} (desligado). Velocidade atual: ${this.velocidade}`);
        },
    };
    carro.ligar();
    carro.acelerar();
    carro.acelerar();
    carro.frear();
    carro.desligar();
}
// interfaceCarro();

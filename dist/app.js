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
obj();

// -----------------------  VARIÁVEIS -----------------------
function variaveis() {
  let nome = "Íris"
  let idade = 24;
  let maiorIdade = true;

  console.log(nome)
  console.log(idade)
  console.log(maiorIdade)
}

function somar(valor1: number, valor2: number) {
  return console.log("Soma:", valor1 + valor2);
}

// variaveis();
// somar(5, 5)

// -----------------------  ARRAYS -----------------------
function array() {
  let array: number[] = [];
  array.push(1)
  array.push(2)
  console.log(array);

  let array2: number[] = [10, 15, 20];
  console.log(array2)

  let array3: (number | string)[] = [100, 150, "teste"];
  array3.push(1)
  array3.push("teste 2")
  console.log(array3)
}

// array();

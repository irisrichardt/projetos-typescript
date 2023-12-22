// -----------------------  VARIÁVEIS -----------------------
function variaveis() {
  let nome = "Íris";
  let idade = 24;
  let maiorIdade = true;

  console.log(nome);
  console.log(idade);
  console.log(maiorIdade);
}

function somar(valor1: number, valor2: number) {
  return console.log("Soma:", valor1 + valor2);
}

// variaveis();
// somar(5, 5)

// -----------------------  ARRAYS -----------------------
function array() {
  let array: number[] = [];
  array.push(1);
  array.push(2);
  console.log(array);

  let array2: number[] = [10, 15, 20];
  console.log(array2);

  let array3: (number | string)[] = [100, 150, "teste"];
  array3.push(1);
  array3.push("teste 2");
  console.log(array3);
}

// array();

// -----------------------  ARRAYS COM TYPE -----------------------
function arrayType() {
  type TipoArray = (number | "exemplo")[];

  let a: TipoArray = [1, 2, 3, "exemplo"];
  let b: TipoArray = ["exemplo", "exemplo", 5, 10, 15];

  console.log(a, b);
}

// arrayType();

// -----------------------  OBJETOS -----------------------
function obj() {
  type Animal = {
    nome: string;
    idade?: number;
  }

  let cachorro: Animal;

  cachorro = {
    nome: "Tom",
    idade: 2
  }
  console.log(cachorro);

  let gata: Animal = {nome: "Sarita"}
  console.log(gata);
}

// obj();

// ----------------------- ENUM -----------------------
enum produtoStatus {
  Disponivel = 1,
  Indisponivel = 2,
  Nao_Existe = 3
}

function checarStatus(status: number) {
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

checarStatus(1)
checarStatus(produtoStatus.Indisponivel)
// checarStatus(3)


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

// checarStatus(1)
// checarStatus(produtoStatus.Indisponivel)
// checarStatus(3)

function interfaceCarro() {

  interface ICarro {
    marca: string;
    modelo: string;
    ligado: boolean;
    velocidade: number;

    ligar(): void;
    desligar(): void;
    acelerar(): void;
    frear(): void;

  }

  let carro: ICarro = {
    marca: "Ford",
    modelo: "F250",
    ligado: false,
    velocidade: 0,

    ligar() {
      this.ligado = true;
      return console.log(`O carro ${this.modelo} está ligado!`);
    },

    acelerar() {
      this.velocidade+=10;
      return console.log(`Você está acelerando. Velocidade atual: ${this.velocidade}`);
    },

    frear() {
      this.velocidade-=10;
      return console.log(`Você está freando. Velocidade atual: ${this.velocidade}`);
    },

    desligar() {
      this.velocidade = 0;
      this.ligado = false;
      return console.log(`Carro ${this.modelo} está ${this.ligado} (desligado). Velocidade atual: ${this.velocidade}`);
    },

  }

  carro.ligar();
  carro.acelerar();
  carro.acelerar();
  carro.frear();
  carro.desligar();
}

// interfaceCarro();

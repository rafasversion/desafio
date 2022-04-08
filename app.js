
const { calculaIdade, calculaIMC } = require('./funcoes.js');

const anoNasc = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

const idade = calculaIdade(anoNasc);
const IMC = calculaIMC(peso, altura)

console.log(`A sua idade é: ${idade}\nE seu IMC é ${IMC}`);
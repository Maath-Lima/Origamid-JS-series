// Declare uma variável contendo uma string
var nome = 'Matheus';
console.log(nome)
// Declare uma variável contendo um número dentro de uma string
var idade = 23 + ' anos';
console.log(idade)
// Declare uma variável com a sua idade
var idade = 23;
console.log(idade)
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Matheus';
var sobrenome = 'Santana'
var nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto)
// Coloque a seguinte frase em uma variável: It's time
var texto = "It's time"
console.log(texto)
// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome
console.log(verificarTipoNome)

console.log('--------------------------------------')

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
console.log(35);
// Crie duas expressões que retornem NaN
var nanReturn1 = +'100s';
var nanReturn2 = '10a' * 2;
console.log(nanReturn1);
console.log(nanReturn2);
// Somar a string '200' com o número 50 e retornar 250
var total = +'200' + 50;
console.log(total);
// Incremente o número 5 e retorne o seu valor incrementado
var inc5 = 5;
console.log(++inc5);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = +numero; // '80kg'
var pesoPorDois = (peso / 2) + unidade; // NaN (Not a Number)
console.log(pesoPorDois)

console.log('--------------------------------------')

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 23
var maeIdade = 54

if (minhaIdade > maeIdade) {
  console.log('é maior');
} else if(minhaIdade === maeIdade) {
  console.log('é igual');
} else{
  console.log('é menor');
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 2) && (5 - ' ');
console.log(expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome)
console.log(!!idade)
console.log(!!possuiDoutorado)
console.log(!!empregoFuturo)
console.log(!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

console.log('-----------------Funções---------------------')

// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
  return !!valor ? true : false
}

console.log(verificaTruthy(''))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  if (typeof lado !== 'number') return;
  return lado * 4;
}

console.log(perimetro(4))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nome_Completo(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nome_Completo('Matheus', 'Santana'));
// Crie uma função que verifica se um número é par
function isEven(valor) {
  return valor % 2 === 0 ? true : false;
}

console.log(isEven(2));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOfValue(valor) {
  return typeof valor
}

console.log(typeOfValue(undefined));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log("Matheus de Lima Santana");
})
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

console.log('-----------------Objetos---------------------')

// Crie um objeto com os seus dados pessoais
var matheus = {
  nome: 'Matheus',
  sobrenome: 'Santana',
  idade: 23,
  nomeCompleto: () => {
    return this.nome + ' ' + this.sobrenome
  }
}
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  cor: 'preto',
  idade: 10,
  late: (homem) => {
    if(homem === true){
      return 'Au au!!!!'
    }
  }
}


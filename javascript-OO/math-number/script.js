// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

console.log(Math.max(...numeros.split(', ')));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200']; 

function roundPrices(listaMoeda) {
  let listaRoundCurrency = [];

  for (const preco of listaMoeda) {
    listaRoundCurrency.push(+getCurrency(preco).toFixed(2));
  }

  return listaRoundCurrency;
}

function getCurrency(currencyString) {
  let arrayRegexMatchNumber = currencyString.match(/[0-9]/g);
  
  return    +currencyString
            .slice(currencyString.indexOf(arrayRegexMatchNumber[0]), 
            currencyString.lastIndexOf(arrayRegexMatchNumber[arrayRegexMatchNumber.length - 1]) + 1)
            .replace(',', '.');
}

function sumPrice() {
  let roundedPrices = roundPrices(listaPrecos);

  return roundedPrices.reduce((total, i) => total + i);
}

console.log(sumPrice());
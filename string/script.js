// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxa = 0;
let recebimento = 0;

transacoes.forEach(element => {
  let {descricao, valor} = element;

  if (descricao.toLowerCase().includes('taxa')) {
    taxa += +(valor.split('R$ ')[1]);
  } 
  else if(descricao.toLowerCase().includes('recebimento')) {
    recebimento += +(valor.split('R$ ')[1]);
  }
});

console.log('Taxa: ' + taxa);
console.log('Recebimento: ' + recebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'))

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split('span').join('a'))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(frase.length - 1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

console.log(transacoes2.filter( i => i.toLowerCase().includes('taxa')).length);
console.log(transacoes2.reduce((count, element) => count + (element.toLocaleLowerCase().includes('taxa') ? 1 : 0), 0));

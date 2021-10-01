const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
let primeiroValorComidas = comidas.shift();
console.log(primeiroValorComidas);
// Remova o último valor de comidas e coloque em uma variável
let ultimoValorComidas = comidas.pop();
console.log(ultimoValorComidas);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Pexei', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
console.log(html.split('section').join('ul').split('div').join('li'));
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const novosCarros = carros.slice();
carros.pop();

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const nodeListCurso = document.querySelectorAll('.curso');

const listaCurso = Array.from(nodeListCurso);

const listaCursoObjJs = listaCurso.map((curso) => 
                                        ({titulo: curso.children[0].textContent,
                                         descricao: curso.children[1].textContent,
                                         aulas: curso.children[2].textContent,
                                         horas: curso.children[3].textContent,
                                        }));

console.log(listaCursoObjJs);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

console.log(numeros.filter(n => n > 100));

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log(instrumentos.some(i => i === 'Baixo'));

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

console.log(compras.reduce((valorTotal, {preco}) => valorTotal + +(preco.replace('R$', '').trim().replace(',', '.')), 0))

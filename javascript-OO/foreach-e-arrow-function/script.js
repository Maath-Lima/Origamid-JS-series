// Mostre no console cada parágrado do site
const pList = document.querySelectorAll('p');

pList.forEach((pItem) => console.log(pItem));

// Mostre o texto dos parágrafos no console

pList.forEach((pItem) => console.log(pItem.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++); 


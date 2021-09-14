// Adicione a classe ativo a todos os itens do menu
const menuList = document.querySelectorAll('.menu ul li a');
const menu = document.querySelector('.menu');

function setAtivoAllItens(collection) {
  let arrayHTMLNodes = Array.from(collection);

  arrayHTMLNodes.forEach((element) => {
    element.classList.add('Ativo');
    if (element.children) setAtivoAllItens(element.children);
  });
}

console.log(menuList);
console.log(setAtivoAllItens(menu.children));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
 menuList.forEach((li, i) => {
  if (i !== 0) li.classList.remove('Ativo') 
})

console.log(menuList);

// Verifique se as imagens possuem o atributo alt
const imgAlt = document.querySelectorAll('img[alt]');

console.log(imgAlt.length === 0 ? false : imgAlt);

// Modifique o href do link externo no menu
const outsideAnchor = document.querySelector('a[href^="https"]');

console.log(outsideAnchor.setAttribute('href', '#teste'));

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const insideSiteLinks = document.querySelectorAll('a[href^="#"]');

function addActiveClass(e, links) {
  e.preventDefault();
  
  e.target.classList.add('Ativo');

  links.forEach((linkDisableActiveClass) => {
    if (linkDisableActiveClass.classList.contains('Ativo') && linkDisableActiveClass !== e.target) linkDisableActiveClass.classList.remove('Ativo')
  });
}

insideSiteLinks.forEach((link, index, links) => {
  link.addEventListener('click', (e) => {
    addActiveClass(e, links);
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *:not(script)');

allElements.forEach((element) => {
  element.addEventListener('click', elementClick);
});
 
function elementClick(e) {
  console.log(e);
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const allToRemoveElements = document.querySelectorAll('body *:not(script)');

allToRemoveElements.forEach((removedElement) => {
  removedElement.addEventListener('click', elementClick);
});
 
function elementClick(e) {
  e.target.remove()
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function HandleBiggerTextKey(e) {
  if (e.key === 't') {
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown', HandleBiggerTextKey);
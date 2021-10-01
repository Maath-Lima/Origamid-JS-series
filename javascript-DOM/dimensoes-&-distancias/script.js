// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');

console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
window.onload = function() {
  const allImg = document.querySelectorAll('img');
  
  let widthImgSum = Array.from(allImg).reduce((sum, img) => sum + img.clientWidth, 0);
  
  console.log(widthImgSum);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a')

allLinks.forEach((link) => {
  if (link.offsetWidth < 48 || link.offsetHeight < 48) console.log(`O link ${link.innerText} não possui o mínimo recomendado`);
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');

  menu.classList.add('menu-mobile');
}
// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img') 

console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const allImagesStartedWithImagem = document.querySelectorAll('img[src^="img/imagem"]');

console.log(allImagesStartedWithImagem);

// Selecione todos os links internos (onde o href começa com #)
const innerLinks = document.querySelectorAll('a[href^="#"]');

console.log(innerLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstHeading2 = document.querySelector('.animais-descricao h2');

console.log(firstHeading2);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');

console.log(lastP[--lastP.length]);

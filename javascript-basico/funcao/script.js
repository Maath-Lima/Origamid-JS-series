// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const listParagraphElement = document.querySelectorAll('p');

const numberOfCharacters = Array.prototype.reduce.call(listParagraphElement, (total, element) => {
    return total + element.innerText.length;
}, 0);

console.log(numberOfCharacters);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createHTMLElement(tag, cssClass, content){
 let element = document.createElement(tag);

 element.classList.add(cssClass);
 element.innerHtml = content;

 return element;
}

console.log(createHTMLElement('ul', 'teste', 'asdasdassd'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const headElement = createHTMLElement.bind(null, 'h1', 'titulo');


console.log(headElement2);
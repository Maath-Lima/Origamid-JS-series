// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy')

const menuCopy = menu.cloneNode(true);

copy.appendChild(menuCopy);

// Selecione o primeiro DT da dl de Faq
const faqDT = document.querySelector('.faq-lista');

console.log(faqDT.children[0]);

// Selecione o DD referente ao primeiro DT
const faqDD = document.querySelector('.faq-lista');

console.log(faqDD.children[0].nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais').cloneNode(true);

faq.replaceChildren(animais);
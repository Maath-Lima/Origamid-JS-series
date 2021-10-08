
function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab-menu] li');
  const tabContent = document.querySelectorAll('[data-tab-content] section');
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabContent[0].classList.add(tabContent[0].dataset.anime);

    function activeTab(index){
      const animeStyle = tabContent[index].dataset.anime;

      tabContent.forEach((section) => {
        section.classList.remove('ativo')
        section.classList.remove(section.dataset.anime);
      })
      
      tabContent[index].classList.add('ativo');
      tabContent[index].classList.add(animeStyle);
    }
    
    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-accordion] dt');
  const ativoClass = 'ativo';

  accordionList[0].classList.add(ativoClass);
  accordionList[0].nextElementSibling.classList.add(ativoClass);
  
  function activeAccordion() {

    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  accordionList.forEach((dt) => {
    dt.addEventListener('click', activeAccordion)
  })
}

function initScrollToSection() {
  const linksInterno = document.querySelectorAll('[data-menu] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    //forma alternativa
    /* window.scrollTo({
      top: topo,
      behavior: 'smooth'
    }); */
  }

  linksInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

initTabNav();
initAccordion();
initScrollToSection();
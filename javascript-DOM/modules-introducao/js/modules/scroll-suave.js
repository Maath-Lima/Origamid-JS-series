export default function initScrollSuave() {
  const sections = document.querySelectorAll('[data-scroll]');

  if (!sections.length) {
    return;
  }

  const windowMetade = window.innerHeight * 0.6

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }

  window.addEventListener('scroll', animaScroll)

  animaScroll();
}
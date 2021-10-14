export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(e) {
    e.preventDefault();

    this.classList.toggle('active');
  }

  dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  })
} 
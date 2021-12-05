// Variables
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btn-menu');

// Eventos
btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnMenu.firstElementChild.classList.toggle('rotate');
});

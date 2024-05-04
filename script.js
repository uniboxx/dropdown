const dropdown = document.querySelector('.dropdown');
const dropWindow = document.querySelector(`.drop-window`);

dropdown.addEventListener('click', e => {
  dropWindow.classList.toggle('visible');
});

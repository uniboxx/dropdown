const dropItem = document.querySelector('.drop-item');
const dropList = document.querySelector(`.drop-list`);

dropItem.addEventListener('click', e => {
  dropList.classList.toggle('visible');
});

document.addEventListener('click', e => {
  if (e.target === dropItem) return;
  if (!dropList.contains(e.target)) dropList.classList.remove('visible');
});

dropList.addEventListener('click', e => {
  const dropItem = e.target.closest('li');
  console.log(dropItem.textContent);
});

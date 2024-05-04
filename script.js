const dropItem = document.querySelector('.drop-item');
const dropList = document.querySelector(`.drop-list`);
const overlay = document.querySelector(`.overlay`);
const nav = document.querySelector('nav');

dropItem.addEventListener('click', e => {
  dropList.classList.toggle('visible');
});
[nav, overlay].forEach(el =>
  el.addEventListener('click', e => {
    if (
      e.target.classList.contains('drop-item') ||
      e.target.parentElement === dropList ||
      e.target.parentElement === document.querySelector('.drop-container')
    )
      return;
    dropList.classList.remove('visible');
  })
);

dropList.addEventListener('click', e => {
  const dropItem = e.target.closest('li');
  if (!dropItem) return;
  console.log(dropItem.textContent);
});

const dropContainer = document.querySelector(`.drop-container`);
const dropItem = document.querySelector('.drop-item');
const dropList = document.querySelector(`.drop-list`);

dropItem.addEventListener('click', e => {
  dropList.classList.toggle('hidden');
});

document.addEventListener('click', e => {
  if (!dropContainer.contains(e.target)) dropList.classList.add('hidden');
});

dropList.addEventListener('click', e => {
  const dropItem = e.target.closest('li');
  console.log(dropItem.textContent);
});

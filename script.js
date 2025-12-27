// ?航菜?切?（移?端）
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// 提示メッセージ
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you very much indeed.');
  form.reset();
});


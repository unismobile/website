// ?航菜?切?（移?端）
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ??表?提交提示
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('感??的留言！');
  form.reset();
});

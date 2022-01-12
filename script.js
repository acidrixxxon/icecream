const closeBtnHandler = () => {
  document.querySelector('.header__navbar').classList.remove('show');
};

const showNavbar = () => {
  document.querySelector('.header__navbar').classList.add('show');
};

document
  .querySelector('.header__navbar__buttons--closeBtn')
  .addEventListener('click', closeBtnHandler);
document.querySelector('.header__nav__hamburger').addEventListener('click', showNavbar);

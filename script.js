const navbar = document.querySelector('.navbar');

const closeBtnHandler = () => {
  document.querySelector('.navbar').classList.remove('show');
};

const showNavbar = () => {
  document.querySelector('.navbar').classList.add('show');
};

document.querySelector('.navbar__buttons--closeBtn').addEventListener('click', closeBtnHandler);
document.querySelector('.header__nav__hamburger').addEventListener('click', showNavbar);

// document.querySelector('#header').onClick((e) => {
//   console.log(e);
//   if (navbar.classList.contains('show')) {
//     console.log(true);
//     console.log(e.target);
//     if (e.target !== navbar) {
//       closeBtnHandler();
//     }
//   }
// });

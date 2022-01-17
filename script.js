const navbar = document.querySelector('.navbar');

const closeBtnHandler = () => {
  document.querySelector('.navbar').classList.remove('show');
};

const showNavbar = () => {
  document.querySelector('.navbar').classList.add('show');
};

document.querySelector('.navbar__buttons--closeBtn').addEventListener('click', closeBtnHandler);
document.querySelector('.header__nav__hamburger').addEventListener('click', showNavbar);

const navLinks = document.querySelectorAll('.navbar__menu--link');

const hideNavbar = () => {
  document.querySelector('.navbar').classList.remove('show');
};
navLinks.forEach((link) => {
  console.log(link);
  link.onclick = hideNavbar;
});

// -----------------------reviews slider
const paginationDots = document.querySelectorAll('.reviews__pagination--item');
const reviewSlides = document.querySelectorAll('.reviews__review--avatar');

let activeIndex = 0;
let prevIndex = null;

paginationDots[activeIndex].classList.add('active');
reviewSlides[activeIndex].classList.add('show');

const paginationDotHandler = (e) => {
  prevIndex = activeIndex;
  activeIndex = e.target.dataset.index;

  if (!e.target.classList.contains('active')) {
    paginationDots.forEach((dot) => {
      if (dot.classList.contains('active')) {
        dot.classList.remove('active');
      }
    });

    e.target.classList.add('active');
  }
};

const changeSlide = () => {
  console.log('Slide is changed!');
  console.log(reviewSlides[prevIndex]);
  reviewSlides.forEach((slide) => {
    if (slide.classList.contains('show')) {
      slide.classList.remove('show');
    }
  });

  reviewSlides[activeIndex].classList.add('show');
};

const changeSlideHandler = (e) => {
  changeSlide();
  paginationDotHandler(e);
};

paginationDots.forEach((dot) => {
  dot.onclick = changeSlideHandler;
});

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.modal__close');
const cancelBtn = document.querySelector('.cancel-btn');

const openModal = () => {
  modal.classList.add('show');
};

const closeModal = () => {
  modal.classList.remove('show');
};

document.querySelector('.header__btn').addEventListener('click', () => {
  openModal();
  modal.onclick = (e) => {
    console.log(e);
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  cancelBtn.onclick = (e) => {
    closeModal();
  };
  closeBtn.onclick = (e) => {
    closeModal();
  };
});

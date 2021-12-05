const leftside = document.querySelector('.welcome__left')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.header__hamburger')
const current = document.querySelector('.welcome__slider_current')
const controls = document.querySelector('.welcome__slider')
const left = document.querySelector('.welcome__left')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('hamburger-show')
    // controls.classList.toggle('hide')
    left.classList.toggle('none')
})

hamburger.addEventListener('click', function() {
  this.classList.toggle("change");
})

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide");
const slideCount = (slides.length / 4).toFixed();
fraction.textContent = `1 | ${slideCount}`;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    lazy: true,
    // type: "fraction",
    
  // If we need pagination
  pagination: {
    el: '.welcome__slider_count',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.welcome__slider__controls_next',
    prevEl: '.welcome__slider__controls_prev',
  },
});

swiper.on('slideChange', function () {
  fraction.textContent = `${swiper.realIndex + 1} | ${slideCount}`;
});

const menu = document.querySelector('.header__hamburger')
window.addEventListener('hashchange', isHash,  false)

function isHash() {
    menu.classList.remove('hamburger-show')
    left.classList.remove('none')
    location.hash = '/'
    document.body.style.overflow='unset'
}

const welcome = document.querySelector('.welcome')


  welcome.addEventListener('click', (e) => {
    if (e.target !== menu) {
      menu.classList.remove('hamburger-show');
      left.classList.remove('none')
    }
});
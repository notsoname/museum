const pictureInnerContainer = document.querySelector('.gallery__inner__container')

let arr = [
    'assets/img/gallery/galery1.jpg',
    'assets/img/gallery/galery2.jpg',
    'assets/img/gallery/galery3.jpg',
    'assets/img/gallery/galery4.jpg',
    'assets/img/gallery/galery5.jpg',
    'assets/img/gallery/galery6.jpg',
    'assets/img/gallery/galery7.jpg',
    'assets/img/gallery/galery8.jpg',
    'assets/img/gallery/galery9.jpg',
    'assets/img/gallery/galery10.jpg',
    'assets/img/gallery/galery11.jpg',
    'assets/img/gallery/galery12.jpg',
    'assets/img/gallery/galery13.jpg',
    'assets/img/gallery/galery14.jpg',
    'assets/img/gallery/galery15.jpg'
]

export function addImg(arr) {
    let random = arr.sort(() => Math.random() - 0.5);
    let imgs = random.map(item => {
        return `<img class="gallery__img gallery__item" src=${item} alt="galery1">`
    })
    pictureInnerContainer.innerHTML = imgs.join(' ') 
}

addImg(arr)

const sliderImgs = document.querySelectorAll('.gallery__img')

export function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

export function checkSlide(e) {
     sliderImgs.forEach(slider => {
         const slideInt = (window.scrollY + window.innerHeight) - slider.height / 4;
         const imageBottom = slider.offsetTop + slider.height;
         const isHalfShown = slideInt > slider.offsetTop;
         const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            slider.classList.add('gallery__img_active')
        } else {
            slider.classList.remove('gallery__img_active')
        }
     })
 } 

 window.addEventListener('scroll', debounce(checkSlide))
const slider = document.querySelector('.explore__slider')
const secondSlider = document.querySelector('.foreground-img')
const sliderBtn = document.querySelector('.explore__container-btn')
slider.addEventListener('change', compare)
slider.addEventListener('mousemove', compare)


function compare(e) {
    const sliderPos = e.target.value;
    secondSlider.style.width = `${sliderPos}%`
    sliderBtn.style.left = `calc(${sliderPos}% - 22.6px)`
}



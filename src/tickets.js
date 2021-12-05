// const buyBtn = document.querySelector('.tickets_content_amount_btn')
// const modal = document.querySelector('.modal')
// const closeBtn = document.querySelector('.modal__close')
// const overlay = document.querySelector('.modal__overlay')

// function openModal() {
//     overlay.classList.add('visible')
//     modal.classList.add('flex')
// }

// function closeModal() {
//     overlay.classList.remove('visible')
//     modal.classList.remove('flex')
// }

// buyBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal)

// const form = document.querySelector('.modal__form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
// })

// const bookBtn = document.querySelector('.modal__btn')

// bookBtn.addEventListener('click', function(e) {
//     let x = e.clientX - e.target.offsetLeft;
//     let y = e.clientY - e.target.offsetTop;

//     let ripples = document.createElement('span')
//     ripples.classList.add('modal__ripples')
//     ripples.style.left = x + 'px'
//     ripples.style.top = y + 'px'
//     this.appendChild(ripples)

//     setTimeout(() => {
//         ripples.remove()
//     }, 1000);
// })


// window.onclick = function(event) {
//     if (event.target == overlay) {
//       overlay.classList.remove('visible');
//       modal.classList.remove('flex')
//     }
// }

// if (!localStorage.getItem('basic')  && !localStorage.getItem('senior' ))  {
//     localStorage.setItem('basic', 1)
//     localStorage.setItem('senior', 1)
// }



// const amount = document.querySelector('.amount')
// const basicCount = document.querySelector('.basic')
// const seniorount = document.querySelector('.senior')
// const permanent = document.querySelector('.permanent')
// const temporary = document.querySelector('.temporary')
// const combined = document.querySelector('.combined')
// const modalBasic = document.querySelector('.modalBasic')
// const modalSenior = document.querySelector('.modalSenior')


// const basicPlus = document.querySelectorAll('.basicPlus')
// const minus = document.querySelectorAll('.minus')
// const modalSum = document.querySelector('.modal__tickets-price')




// let price = 20
// if (localStorage.getItem('totalSum')) {
//     amount.textContent = localStorage.getItem('totalSum')
//     modalSum.textContent = localStorage.getItem('totalSum')
// } else {
//     amount.textContent = `€ ${(basicCount.value * price) + (seniorount.value * price)/2 }`
//     modalSum.textContent = `€ ${(basicCount.value * price) + (seniorount.value * price)/2 }`
// }

// const modalbasicCount = document.querySelector('.modal__tickets-basic-count')
// const modalSeniorCount = document.querySelector('.modal__tickets-senior-count')
// const modalBasicPrice = document.querySelector('.modal__tickets-basic')
// const modalSeniorPrice = document.querySelector('.modal__tickets-senior')
// modalbasicCount.textContent = localStorage.getItem('basic')
// modalSeniorCount.textContent = localStorage.getItem('senior')

// function checkChoose(elem, num) {
//     if (elem.checked) {
//         price = num
//     }
//     localStorage.setItem('totalSum',  `€ ${(basicCount.value * price) + (seniorount.value * price)/2 }`)
//     amount.textContent = localStorage.getItem('totalSum')
//     modalSum.textContent = localStorage.getItem('totalSum')
// }

// permanent.addEventListener('click', function() {
//     checkChoose(this, 20)
// })
// temporary.addEventListener('click', function() {
//     checkChoose(this, 25)
// })
// combined.addEventListener('click', function() {
//     checkChoose(this, 40)
// })


// basicPlus.forEach(el => {
//     el.addEventListener('click', function() {
//         localStorage.setItem('basic', basicCount.value)
//         localStorage.setItem('senior', seniorount.value)
//         localStorage.setItem('totalSum',  `€ ${(basicCount.value * price) + (seniorount.value * price)/2 }`)
//         amount.textContent = localStorage.getItem('totalSum')
//         modalSum.textContent = localStorage.getItem('totalSum')
//         modalbasicCount.textContent = localStorage.getItem('basic')
//         modalSeniorCount.textContent = localStorage.getItem('senior')
//     })
// })
// minus.forEach(el => {
//     el.addEventListener('click', function() {
//         localStorage.setItem('basic', basicCount.value)
//         localStorage.setItem('senior', seniorount.value)
//         localStorage.setItem('totalSum',  `€ ${(basicCount.value * price) + (seniorount.value * price)/2 }`)
//         amount.textContent = localStorage.getItem('totalSum')
//         modalSum.textContent = localStorage.getItem('totalSum')
//         modalbasicCount.textContent = localStorage.getItem('basic')
//         modalSeniorCount.textContent = localStorage.getItem('senior')
//     })
// })
// seniorount.value = localStorage.getItem('senior')
// basicCount.value = localStorage.getItem('basic')
// const valueTotal = localStorage.getItem('totalSum')
// modalBasic.value = localStorage.getItem('basic')
// modalSenior.value = localStorage.getItem('senior')


// const modalDate = document.querySelector('.modal__inputs-time-date')
// const modalTime = document.querySelector('.modal__inputs-time-time')
// const modalTimeTilte = document.querySelector('.modal__inputs-title-time')

// modalDate.addEventListener('click', function() {
//     this.classList.remove('none')
//     this.style.border = 'none'
// })
// modalTime.min = '09:00'
// modalTime.max = '18:00'


// modalTime.addEventListener('click', function() {
//     this.classList.remove('none')
//     this.style.border = 'none'
//     this.style.width = '152px'
//     modalTimeTilte.style.display = 'none'
// })

//  const modalDay = document.querySelector('.modal__overview-day')

//  modalDate.addEventListener('change', function() {
//     let st = this.value
//     let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
//     let dt = new Date(st.replace(pattern,'$3-$2-$1'));
//     modalDay.textContent = dt
//  })
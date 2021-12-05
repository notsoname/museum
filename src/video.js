import './sass/index.scss'

const video = document.querySelector('.videomp4');
const progress = document.querySelector('.player__progress-main');
const toggle = document.querySelector('.play');
const skipBtns = document.querySelectorAll('[data-skip]')
const volume = document.querySelector('.player__volume')
const fullscreen = document.querySelector('.fullscreen')
const volumeBtn = document.querySelector('.volumeBtn')
const playOverlay = document.querySelector('.player__overlay')

export const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    if (video.paused) {
        playOverlay.classList.add('hide')
        playOverlay.classList.remove('show')
    } else {
        playOverlay.classList.add('show')
        playOverlay.classList.remove('hide')
    }
    video[method]();
}
export const updateButton = () => {
    const icon = video.paused ? './assets/svg/play.svg' : './assets/svg/pause.svg';
    toggle.innerHTML = `
    <img src="${icon}" alt="button">
    `
}

export function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volume.value * 100}%, #c4c4c4 ${volume.value * 100}%, #c4c4c4 100%)`
export function handleRangeUpdate() {
    video[this.name] = this.value;
    let icon = './assets/svg/mute.svg';
    let volume = './assets/svg/volume.svg'
    this.value == 0 ? volumeBtn.innerHTML = `<img src="${icon}" alt="volume">` : volumeBtn.innerHTML = `<img src="${volume}" alt="volume">`
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value * 100}%, #c4c4c4 ${this.value * 100}%, #c4c4c4 100%)`
}

export function handleProgress() {
    const percent = (video.currentTime/ video.duration) ;
    progress.value = `${percent}`
    const value = progress.value;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value * 100}%, #c4c4c4 ${value * 100}%, #c4c4c4 100%)`
    if (progress.value == 1) {
        playOverlay.classList.add('show')
    }
}

export function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

export function muteVideo() {
    video.muted = video.muted ? false : true;
    volume.value = video.muted ? 0 : 0.3
    video.volume = volume.value
    let icon = video.muted ? './assets/svg/mute.svg' : './assets/svg/volume.svg'
    volumeBtn.innerHTML = `
    <img src="${icon}" alt="volume">
    `
    volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volume.value * 100}%, #c4c4c4 ${volume.value * 100}%, #c4c4c4 100%)`
}
export function upVolume() {
    video.muted = false
    volume.value = +volume.value + 0.1
    video.volume = volume.value
}

export function downVolume() {
    volume.value = +volume.value - 0.1
    video.volume = volume.value
}

export function fast() {
    video.playbackRate += 0.2
}
export function slow() {
    video.playbackRate -= 0.2
}

export function openFullScreen() {
    video.requestFullscreen()
    if (video.requestFullscreen) {
        document.exitFullscreen()
    }
}

export function skipPartVideo(part) {
    video.currentTime = video.duration * part
}

export function skip10(duration) {
    video.currentTime += (duration)
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay);
skipBtns.forEach((btn) => {
    btn.addEventListener('click', skip)
})


volume.addEventListener('mousemove', handleRangeUpdate);
volume.addEventListener('click', handleRangeUpdate);


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', openFullScreen)

volumeBtn.addEventListener('click', muteVideo)


document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.code === 'Period') {
        fast()
    }
    if (e.shiftKey && e.code === 'Comma') {
        slow()
    }
    switch (e.code) {
        case 'KeyM':
            muteVideo()
            break
        case 'KeyK':
            togglePlay()
            break
        case 'KeyF':
            openFullScreen()
            break
        case 'Digit1':
            skipPartVideo(0.1)
            break
        case 'Digit2':
            skipPartVideo(0.2)
            break
        case 'Digit3':
            skipPartVideo(0.3)
            break
        case 'Digit4':
            skipPartVideo(0.4)
            break
        case 'Digit5':
            skipPartVideo(0.5)
            break
        case 'Digit6':
            skipPartVideo(0.6)
            break
        case 'Digit7':
            skipPartVideo(0.7)
            break
        case 'Digit8':
            skipPartVideo(0.8)
            break
        case 'Digit9':
            skipPartVideo(0.9)
            break
        case 'Digit0':
            skipPartVideo(0)
            break
        case 'ArrowRight':
            skip10(5)
            break
        case 'ArrowLeft':
            skip10(-5)    
            break
        case 'ArrowUp':
            upVolume()
            break
        case 'ArrowDown':
            downVolume()
            break
        case 'KeyL':
            skip10(10)
            break
        case 'KeyJ':
            skip10(-10)
            break    
    }
})

// const videoDots = document.querySelector('.video__slider_dots')

// const youtubeVideos = document.querySelectorAll('.video__yotube')
// for (let i = 0; i < youtubeVideos.length; i++) {
//     let dot = document.createElement('div')
//     dot.classList.add('video__slider_dot')
//     videoDots.appendChild(dot)
// }

// let allVideoDots = document.querySelectorAll('.video__slider_dot')
// allVideoDots[0].classList.add('video__slider_dot-active')



// youtube


const swiper = new Swiper('.swiper-s', {
    slidesPerView: 3,
    spaceBetween: 42,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
  // If we need pagination
  pagination: {
    el: '.video__slider_dots',
    clickable: true,
    bulletActiveClass: 'video__slider_dot-active',
    renderBullet: function (index, className) {
        return `<span class="video__slider_dot ${className}"></span>`;
      },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.video__slider_next',
    prevEl: '.video__slider_prev',
  },
});


const youtube = document.querySelectorAll('.video__yotube')
const sliderNext = document.querySelector('.video__slider_next')
function stopVideo() {
    youtube.forEach(el => el.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'))
}

sliderNext.addEventListener('click', () => {
    stopVideo()
})

const sliderDots = document.querySelectorAll('.video__slider_dot')
sliderDots.forEach(el => {
    el.addEventListener('click', stopVideo)
})

const videos = [
    './assets/videos/video3.mp4',
    './assets/videos/video1.mp4',
    './assets/videos/video2.mp4',
    './assets/videos/video4.mp4',
    './assets/videos/video0.mp4',
]

const posters = [
    './assets/img/video/poster3.jpeg',
    './assets/img/video/poster1.jpeg',
    './assets/img/video/poster2.jpeg',
    './assets/img/video/poster4.jpeg',
    './assets/img/video/poster0.jpeg',
]


swiper.on('slideChange', function () {
    console.log(this.realIndex)
    video.poster = posters[this.realIndex]
    video.src = videos[this.realIndex]
    progress.value = 0
    const icon = video.paused ? './assets/svg/play.svg' : './assets/svg/pause.svg';
    toggle.innerHTML = `
    <img src="${icon}" alt="button">
    `
    if (video.paused) {
        playOverlay.classList.add('show')
        playOverlay.classList.remove('hide')
    } else {
        playOverlay.classList.add('hide')
        playOverlay.classList.remove('show')
    }
});
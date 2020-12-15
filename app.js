let time = 5000
let currentImageIndex = 0
let images = document.querySelectorAll('#slider img')
let max = images.length
let nextButton = document.querySelector('img.next')
let previousButton = document.querySelector('img.previous')
let interval = null

function nextImage() {
    images[currentImageIndex].className = ''

    currentImageIndex++;

    if (currentImageIndex == max)
        currentImageIndex = 0

    images[currentImageIndex].className = 'selected'
}

function previousImage() {
    images[currentImageIndex].classList.remove('selected')
    
    currentImageIndex--;

    if (currentImageIndex < 0)
        currentImageIndex = max-1

    images[currentImageIndex].classList.add('selected')
}

function stopImage() {
    clearInterval(interval)
}

function start() {
    interval = setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener('load', start)
nextButton.addEventListener('click', nextImage)
previousButton.addEventListener('click', previousImage)

for(let index = 0; index < max; index++) {
    images[index].addEventListener('mouseover', stopImage)
    images[index].addEventListener('mouseleave', start)
}
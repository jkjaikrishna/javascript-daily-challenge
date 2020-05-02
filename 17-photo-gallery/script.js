const mainView = document.getElementById('main-view');
const caption = document.getElementById('caption');
const info = document.getElementById('info');

const thumbnails = document.getElementById('thumbnails');

for(let i= 0; i< images.length; i++) {
    let image = images[i];
    let img = document.createElement('img');
    img.src = 'images/' + images[i].url;
    img.setAttribute('width', 170);
    img.setAttribute('data-index', i);
    img.addEventListener('click', changeImage);
    thumbnails.appendChild(img);
}

function initGallery() {
    loadImage(0);
};

function slideImage() {
    let currentIndex = parseInt(mainView.getAttribute('data-index'));
    currentIndex = currentIndex + 1 == images.length ? 1 : currentIndex + 1;
    loadImage(currentIndex);
    setTimeout(slideImage, 3000);

}

function changeImage(event) {
    let target = event.currentTarget;
    let index = target.getAttribute('data-index');
    loadImage(index);
}

function loadImage(index) {
    let image = images[index];
    mainView.src = 'images/' + image.url;
    mainView.setAttribute('data-index', index);
    mainView.setAttribute('id', 'image-' + index);
    mainView.style.opacity = 1;
    caption.textContent = image.caption;
    info.textContent = image.info;

}

function fullScreenImage() {
    toggleFullscreen(mainView);
}

function toggleFullscreen(el) {
    if(document.fullscreenElement || document.mozFullScreenElement 
        || document.webkitFullscreenElement || document.msFullscreenElement) {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            else if(document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        else {
            if(document.documentElement.requestFullscreen) {
                el.requestFullscreen();
            }
            else if(document.documentElement.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            }
            else if(document.documentElement.webkitRequestFullscreen) {
                el.webkitRequestFullscreen();
            }
            else if(document.documentElement.msRequestFullscreen) {
                el.msRequestFullscreen();
            }
        }
}

initGallery();
setTimeout(slideImage, 3000);
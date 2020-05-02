const mainView = document.getElementById('main-view');
const caption = document.getElementById('caption');
const info = document.getElementById('info');

const thumbnails = document.getElementById('thumbnails');

function initGallery() {
    loadImage(0);

    for(let i= 0; i< images.length; i++) {
        let image = images[i];
        let img = document.createElement('img');
        img.src = 'images/' + images[i].url;
        img.setAttribute('width', 170);
        img.setAttribute('data-index', i);
        img.addEventListener('click', changeImage);
        thumbnails.appendChild(img);
    }
};

function changeImage(event) {
    let target = event.currentTarget;
    let index = target.getAttribute('data-index');
    loadImage(index);

}

function loadImage(index) {
    let image = images[index];
    mainView.src = 'images/' + image.url;
    caption.textContent = image.caption;
    info.textContent = image.info;



}
initGallery();
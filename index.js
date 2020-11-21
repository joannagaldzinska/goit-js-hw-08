import images from '/gallery-items.js';
// console.log(images);

const gallery = document.querySelector('.js-gallery');
// console.log(gallery);


const imagesList = image => {

    const imgRef = document.createElement('li');
    imgRef.classList.add('gallery__item');

    const imgTag = document.createElement('img');
    imgTag.classList.add('gallery__image');
    imgTag.src = image.preview;
    imgTag.alt = image.description;
    imgTag.dataset.source = image.original;
    

    const imgLink = document.createElement('a');
    imgLink.classList.add('gallery__link');
    imgLink.href = image.original;

 
    imgLink.appendChild(imgTag);
    imgRef.appendChild(imgLink)

    return imgRef;
}

const imgCard = images.map(image => imagesList(image));
console.log(imgCard);

gallery.append(...imgCard);


gallery.addEventListener('click', onGalleryClick)

function onGalleryClick(event){
    event.preventDefault();

    console.log(event.target);

    if (event.target.nodeName !== 'IMG'){
        return;
    }

    console.log('wow');

    const modalImage = document.querySelector('.lightbox__image');
    modalImage.src = ''

    // const preTheImageRef = event.currentTarget.querySelector('lightbox__image');

    // if (preTheImageRef)
    
    const theImageRef = event.target;
    const modalImageURL = theImageRef.dataset.source;

    modalImage.src = modalImageURL
}


// --------------------- lightbox -----------------------

const openModal = document.querySelector('.lightbox');

gallery.addEventListener('click', () => openModal.classList.add('is-open'))


const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closeModalBtn.addEventListener('click', () => openModal.classList.remove('is-open'))

const overlay = document.querySelector('.lightbox__overlay');
overlay.addEventListener('click', () => openModal.classList.remove('is-open'));



const pressEscape = e => {
        if (e.code === 'Escape') {
        openModal.classList.remove('is-open')
    }
}

window.addEventListener('keydown', pressEscape)








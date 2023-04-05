import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listImgEl = document.querySelector('.gallery')

const imgCreateEl = createGaleryImg();

function createGaleryImg() {
    return galleryItems.map(({ preview, description, original }) => {
        return  `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            alt="${description}"
                        />
                    </a>
                </li>`
        
        
    }).join("")
}

listImgEl.insertAdjacentHTML('beforeend', imgCreateEl);


var lightbox = new SimpleLightbox('.gallery a', {  captionsData: 'alt',  captionDelay: 250, });

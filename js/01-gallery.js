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
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </li>`
        
        
    }).join("")
}

listImgEl.insertAdjacentHTML('beforeend', imgCreateEl);



listImgEl.addEventListener('click', (event) => {
    event.preventDefault();
    

    if (!event.target.classList.contains('gallery__image')) { return; };
    // console.log(event.target)

    const dataSourseId = event.target.dataset.source
    console.log(dataSourseId)

    const instance = basicLightbox.create(`
        <div class="modal">
            <img
                class="gallery__image"
                src="${dataSourseId}"
                data-source="${dataSourseId}"
                
            />
        </div>
    `)

    instance.show()

    const modalDiv = document.querySelector('.modal');
    modalDiv.addEventListener('click', (event) => { instance.close() });
});


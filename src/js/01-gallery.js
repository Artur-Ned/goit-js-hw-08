// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);
const wraperRef = document.querySelector('.gallery');
const linkRef = document.querySelector('.gallery__link');
const imageRef = document.querySelector('.gallery__image');

let itemOfgallery = galleryItems.map((image) => {
       
    return `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
}).join('');

wraperRef.insertAdjacentHTML("afterbegin", itemOfgallery);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250  });
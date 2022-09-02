// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);


const imageGallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join('');

imageGallery.insertAdjacentHTML("beforeend", markup);


let lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250});
lightBox.on('show.simplelightbox', function () {
});

console.log(lightBox);




lightBox.on('error.simplelightbox', function (e) {
    console.log(e); // Some usefull information
});
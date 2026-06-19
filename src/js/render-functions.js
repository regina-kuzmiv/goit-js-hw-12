import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  formEl: document.querySelector('.js-form'),
  submitBtn: document.querySelector('.js-submit-btn'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
  loaderBtn: document.querySelector('.js-load-more-btn'),
};

const lightBox = new SimpleLightbox('.js-gallery a');

export const createGallery = images => {
  const markup = images
    .map(image => {
      return `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
    <img
    class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    /></a>
    <div class="info-img">
    <p class="info">
    <span class="info-label">Likes</span>
    <span class="info-value">${image.likes}</span>
    </p>
    <p class="info">
    <span class="info-label">Views</span> 
    <span class="info-value">${image.views}</span>
    </p>
    <p class="info">
    <span class="info-label">Comments</span> 
    <span class="info-value">${image.comments}</span>
    </p>
    <p class="info">
    <span class="info-label">Downloads</span> 
    <span class="info-value">${image.downloads}</span>
    </p>
    </div>
    </li>`;
    })
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightBox.refresh();
};

export const clearGallery = () => {
  refs.gallery.innerHTML = '';
};

export const showLoader = () => {
  refs.loader.classList.add('is-visible');
};

export const hideLoader = () => {
  refs.loader.classList.remove('is-visible');
};

export const showLoadMoreButton = () => {
  refs.loaderBtn.classList.add('is-visible');
};
export const hideLoadMoreButton = () => {
  refs.loaderBtn.classList.remove('is-visible');
};

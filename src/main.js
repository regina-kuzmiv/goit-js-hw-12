// import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  refs,
} from './js/render-functions.js';

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(refs.formEl);
  const query = formData.get('search-text');

  if (!query.trim()) {
    return;
  }

  clearGallery();
  showLoader();

  setTimeout(() => {
    getImagesByQuery(query)
      .then(data => {
        const images = data.hits;

        if (!images || images.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          return [];
        }
        return images;
      })
      .then(images => {
        if (!images.length) return;

        createGallery(images);
      })
      .catch(error => {
        iziToast.error({
          message: 'Sorry, something went wrong. Please try again!',
        });
      })
      .finally(() => hideLoader());
  }, 0);
  e.target.reset();
});

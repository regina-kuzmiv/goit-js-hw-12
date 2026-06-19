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
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let page = 1;
const perPage = 15;
let query = '';
let totalHits = 0;

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(refs.formEl);
  const query = formData.get('search-text');

  if (!query.trim()) {
    return;
  }

  page = 1;
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, perPage);

    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);

    if (page * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }

    refs.formEl.reset();
  } catch (error) {
    hideLoadMoreButton();
    refs.formEl.reset();
    iziToast.error({
      message: 'Sorry, something went wrong. Please try again!',
    });
  } finally {
    hideLoader();
  }
});

refs.loaderBtn.addEventListener('click', async () => {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, perPage);

    createGallery(data.hits);
    showLoadMoreButton();

    const card = document.querySelector('.gallery-item');

    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (page * perPage >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});

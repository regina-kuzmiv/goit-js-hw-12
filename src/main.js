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
import axios from 'axios';

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(refs.formEl);
  const query = formData.get('search-text');

  if (!query.trim()) {
    return;
  }

  clearGallery();
  showLoader();

  setTimeout(async () => {
    try {
      const data = await getImagesByQuery(query, page, perPage);
      const images = data.hits;

      if (!images || images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return [];
      } else if (!images.length) {
        return;
      }
      createGallery(images);
      refs.formEl.reset();
    } catch (error) {
      iziToast.error({
        message: 'Sorry, something went wrong. Please try again!',
      });
    } finally {
      hideLoader();
    }
  }, 0);
});

let page = 1;
const perPage = 15;

refs.loaderBtn.addEventListener('click', async () => {
  if(page > totalHits)
  try {
    const posts = await getImagesByQuery(query, page, perPage);;
    renderPosts(posts);
  }
})

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: per_page,
    _page: page
  });
  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
}
function createGallery(images) {

}
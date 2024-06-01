import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderMarkup } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.style.display = 'none';
let page = 1;
let totalPages = 1;
const limit = 15;
let userSearch;

form.addEventListener('submit', async event => {
  event.preventDefault();
  page = 1;
  userSearch = event.target.elements.search.value.trim();

  if (!userSearch) {
    return iziToast.error({
      message: 'Search query cannot be empty.',
      position: 'topRight',
    });
  }

  loader.classList.remove('is-hidden');
  gallery.innerHTML = '';

  setTimeout(async () => {
    try {
      const images = await fetchImages(userSearch, page, limit);
      totalPages = Math.ceil(images.totalHits / limit);

      loader.classList.add('is-hidden');
      if (images.hits.length === 0) {
        return iziToast.error({
          message: 'No images found for your search query.',
          position: 'topRight',
        });
      }

      renderMarkup(images.hits, gallery);

      if (page < totalPages) {
        loadMoreBtn.style.display = 'block';
      }
    } catch (error) {
      iziToast.error({
        message: `Error during fetching posts: ${error}`,
        position: 'topRight',
      });
      loader.classList.add('is-hidden');
    }
  }, 1000);
  event.currentTarget.reset();
});

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  loader.classList.remove('is-hidden');
  setTimeout(async () => {
    try {
      const images = await fetchImages(userSearch, page, limit);
      renderMarkup(images.hits, gallery);

      loader.classList.add('is-hidden');

      if (page >= totalPages) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
          message: "You've reached the end of search results.",
          position: 'topRight',
        });
      } else {
        loadMoreBtn.style.display = 'block';
      }

      const cardHeight =
        gallery.firstElementChild.getBoundingClientRect().height;

      window.scrollBy({ top: 2 * cardHeight, behavior: 'smooth' });
    } catch (error) {
      iziToast.error({
        message: `Error during loading more images: ${error}`,
        position: 'topRight',
      });
      loader.classList.add('is-hidden');
      loadMoreBtn.style.display = 'none';
    }
  }, 1000);
});


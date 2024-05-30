import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderMarkup } from './js/render-functions.js';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const userSearch = event.target.elements.search.value.trim();

  if (userSearch === '') {
    iziToast.error({
      message: 'Please enter text to find something!',
      position: 'topRight',
    });
    return;
  }

  refs.loader.classList.remove('is-hidden');

  fetchImages(userSearch)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      refs.form.search.value = '';
      refs.gallery.innerHTML = '';
      renderMarkup(images.hits, refs.gallery);
      refs.loader.style.display = 'none';
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
      refs.loader.classList.add('is-hidden');
    });
});
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.list-link');

export const renderMarkup = (list, tag) => {
  const markup = list
    .map(image => {
      return `<li class="list-item">
            <a class="list-link" href="${image.largeImageURL}"><img class="list-img" src="${image.webformatURL}" data-original="${image.largeImageURL}" download></a>
            <ul class="list-statistic">
              <li>
                <span class="list-item-title">likes</span>
                <span class="list-item-number">${image.likes}</span>
              </li>
  
              <li>
                <span class="list-item-title">views</span>
                <span class="list-item-number">${image.views}</span>
              </li>
              <li>
                <span class="list-item-title">comments</span>
                <span class="list-item-number">${image.comments}</span>
              </li>
              <li>
                <span class="list-item-title">downloads</span>
                <span class="list-item-number">${image.downloads}</span>
              </li>
            </ul>
          </li>`;
    })
    .join('');
  tag.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
};

const API_KEY = '44054769-ac6c6ce91eaa06c7c2eb96b02';
const BASE_URL = 'https://pixabay.com/api/?key=';

export const fetchImages = searchValue => {
  return fetch(
    `${BASE_URL}${API_KEY}&image_type=photo&orientation=horizontal&q=${searchValue}&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });
};
import axios from 'axios';

const API_KEY = '44054769-ac6c6ce91eaa06c7c2eb96b02';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchValue, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        q: searchValue,
        safesearch: true,
        page: page,
        per_page: 15, // Змінено з 20 на 15 відповідно до завдання
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};
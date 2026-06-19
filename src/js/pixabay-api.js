import axios from 'axios';

export async function getImagesByQuery(query, page, perPage) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '56280987-1afa6b4fe9ec70137831f4fea',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: Math.max(15, perPage),
    },
  });
  return response.data;
}

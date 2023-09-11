import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '37530335-b7ce3d66d34d0c1e8bc4c7826';

const fetchImagesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(URL, {
    params: {
      q: searchQuery,
      page,
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return response.data;
};

export default fetchImagesWithQuery;

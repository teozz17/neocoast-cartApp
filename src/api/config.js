import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c8fa1303782767db4c31e557878020fb',
  },
});

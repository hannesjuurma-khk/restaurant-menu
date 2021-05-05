import axios from 'axios';

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/3HrSqQ1xSNiIHPvCfpmgjEbBREUuv8Fb',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;

export const START_LOADING = 'START_LOADING';
export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants = () => (dispatch, getState, api) => {
  const startLoading = () => ({type: START_LOADING});

  dispatch(startLoading());
  api.loadRestaurants().then(records => {
    dispatch(storeRestaurants(records));
  });

  const storeRestaurants = records => ({
    type: STORE_RESTAURANTS,
    records,
  });
};

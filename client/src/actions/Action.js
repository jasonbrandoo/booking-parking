import axios from 'axios';
import {
  PARKING_CAR, CAR_IN, CAR_LOADING, POST_DUMMY_DATA, CURRENT_SPACE,
} from './types';

export const setCarLoading = () => ({
  type: CAR_LOADING,
});

export const parkingCar = () => (dispatch) => {
  dispatch(setCarLoading());
  axios
    .get('parking/')
    .then(res => dispatch({
      type: PARKING_CAR,
      payload: res.data,
    }))
    .catch(error => console.log(error));
};

export const carIn = car => (dispatch) => {
  axios
    .post('parking/', car)
    .then(res => dispatch({
      type: CAR_IN,
      payload: res.data,
    }))
    .catch(error => console.log(error));
};

export const postDummyData = data => ({
  type: POST_DUMMY_DATA,
  payload: data,
});

export const currentSpace = data => ({
  type: CURRENT_SPACE,
  payload: data,
});

import axios from 'axios';
import { PARKING_CAR, CAR_IN, CAR_LOADING } from './types';

export const parkingCar = () => (dispatch) => {
  dispatch(setCarLoading());
  axios.get('parking/').then(res => dispatch({
    type: PARKING_CAR,
    payload: res.data,
  })).catch(err => console.log(err));
};

export const carIn = data => ({
  type: CAR_IN,
  payload: data,
});

export const setCarLoading = () => ({
  type: CAR_LOADING,
});

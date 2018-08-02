import axios from 'axios';
import { PARKING_CAR, CAR_IN, CAR_LOADING } from './types';

export const parkingCar = () => (dispatch) => {
  dispatch(setCarLoading());
  axios.get('parking/').then(res => dispatch({
    type: PARKING_CAR,
    payload: res.data,
  })).catch(error => console.log(error));
};

export const carIn = car => (dispatch) => {
  axios.post('parking/', car).then(res => dispatch({
    type: CAR_IN,
    payload: res.data,
  })).catch(error => console.log(error));
};

export const setCarLoading = () => ({
  type: CAR_LOADING,
});

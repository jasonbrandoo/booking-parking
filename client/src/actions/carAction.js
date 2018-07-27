import { PARKING_CAR, CAR_IN } from './types';

export const parkingCar = data => ({
  type: PARKING_CAR,
  payload: data,
});

export const carIn = data => ({
  type: CAR_IN,
  payload: data,
});

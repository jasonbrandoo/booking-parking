import { PARKING_CAR, CAR_IN } from './types';

export const parkingCar = () => ({
  type: PARKING_CAR,
});

export const carIn = data => ({
  type: CAR_IN,
  payload: data,
});

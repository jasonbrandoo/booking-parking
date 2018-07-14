import { PARKING_CAR, CAR_IN } from './types';

export const parkingCar = () => {
  return {
    type: PARKING_CAR
  };
};

export const carIn = data => {
  return {
    type: CAR_IN,
    payload: data
  };
};

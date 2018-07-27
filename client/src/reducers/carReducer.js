import { PARKING_CAR, CAR_IN } from '../actions/types';

const initialState = {
  cars: [],
  parked: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PARKING_CAR:
      return {
        ...state,
        parked: [...state.parked, action.payload],
      };
    case CAR_IN:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    default:
      return state;
  }
}

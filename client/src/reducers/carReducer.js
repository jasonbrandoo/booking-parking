import { PARKING_CAR, CAR_IN } from '../actions/types';

const initialState = {
  cars: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PARKING_CAR:
      return {
        ...state,
      };
    case CAR_IN:
      return {
        ...state,
        cars: [action.payload, ...state.cars],
      };
    default:
      return state;
  }
}

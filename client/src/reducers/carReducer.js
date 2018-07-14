import { PARKING_CAR, CAR_IN } from '../actions/types';

const initialState = {
  car: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PARKING_CAR:
      return {
        ...state
      };
    case CAR_IN:
      return {
        ...state,
        car: [action.payload, ...state.car]
      };
    default:
      return state;
  }
}

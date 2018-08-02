import { PARKING_CAR, CAR_IN, CAR_LOADING } from '../actions/types';

const initialState = {
  cars: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PARKING_CAR:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };
    case CAR_IN:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case CAR_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

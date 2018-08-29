import {
  PARKING_CAR, CAR_IN, CAR_LOADING, DUMMY_DATA, POST_DUMMY_DATA,
} from '../actions/types';

const initialState = {
  cars: [],
  dummyCars: [
    {
      carOwner: 'Jason',
      carType: 'Mazda',
      plateNumber: '1234',
      startTime: '10:00',
      status: true,
    },
  ],
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
    case DUMMY_DATA:
      return {
        ...state,
      };
    case POST_DUMMY_DATA:
      return {
        ...state,
        dummyCars: [...state.dummyCars, action.payload],
      };
    default:
      return state;
  }
}

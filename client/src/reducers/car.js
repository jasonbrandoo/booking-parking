import { POST_DUMMY_DATA } from '../actions/types';

const initialState = [
  {
    carOwner: 'Jason',
    carType: 'Mazda',
    plateNumber: '1234',
    startTime: '10:00',
    status: true,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    /* case PARKING_CAR:
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
      }; */
    case POST_DUMMY_DATA:
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

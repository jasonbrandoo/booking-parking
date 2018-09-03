import { REQUEST_DUMMY_DATA, RECEIVE_DUMMY_DATA, POST_DUMMY_DATA } from '../actions/types';

const initialState = {
  user: [{
    carOwner: 'Jason',
    carType: 'Mazda',
    plateNumber: '1234',
    startTime: '10:00',
  }],
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DUMMY_DATA:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_DUMMY_DATA:
      return {
        ...state,
        loading: false,
      };
    case POST_DUMMY_DATA:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    default:
      return state;
  }
};

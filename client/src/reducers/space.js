import { CURRENT_SPACE } from '../actions/types';

const initialState = {
  freeSpace: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SPACE:
      return {
        ...state,
        freeSpace: state.freeSpace - 1,
      };
    default:
      return state;
  }
};

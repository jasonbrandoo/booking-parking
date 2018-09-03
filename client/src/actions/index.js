import {
  REQUEST_DUMMY_DATA,
  RECEIVE_DUMMY_DATA,
  POST_DUMMY_DATA,
} from './types';

const requestDummyData = () => ({
  type: REQUEST_DUMMY_DATA,
});

export const receiveDummyData = () => (dispatch) => {
  dispatch(requestDummyData());
  return {
    type: RECEIVE_DUMMY_DATA,
  };
};

const handleForm = data => ({
  type: POST_DUMMY_DATA,
  payload: data,
});

export const postDummyData = data => (dispatch) => {
  dispatch(handleForm(data));
};

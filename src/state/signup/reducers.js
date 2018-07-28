import * as types from './types';

const INITIAL_STATE = {
  loading: false,
  finished: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return { ...state, loading: true, finished: false };
    case types.SIGNUP_FAILURE:
      return { ...state, loading: false, finished: false };
    case types.SIGNUP_SUCCESS:
      return { ...state, loading: false, finished: true };
    default:
      return state;
  }
}

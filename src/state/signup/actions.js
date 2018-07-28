import * as types from './types';

function signupRequest() {
  return {
    type: types.SIGNUP_REQUEST,
  };
}

function signupSuccess(response) {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: response.data,
  };
}

function signupFailure(error) {
  return {
    type: types.SIGNUP_FAILURE,
    payload: error,
  };
}

export function signup(username, password) {
  return async (dispatch) => {
    dispatch(signupRequest());
    try {
      console.log('USERNAME', username);
      console.log('PASSWORD', password);
      const response = 'Success';
      dispatch(signupSuccess(response));
    } catch (error) {
      dispatch(signupFailure(error.message));
    }
  };
}

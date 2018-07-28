import * as types from './types';

function <%= name %>Request() {
  return {
    type: types.<%= uppercaseName %>_REQUEST,
  };
}

function <%= name %>Success(response) {
  return {
    type: types.<%= uppercaseName %>_SUCCESS,
    payload: response.data,
  };
}

function <%= name %>Failure(error) {
  return {
    type: types.<%= uppercaseName %>_FAILURE,
    payload: error,
  };
}

export function <%= name %>() {
  return async (dispatch) => {
    dispatch(<%= name %>Request());
    try {
      const response = 'Success';
      dispatch(<%= name %>Success(response));
    } catch (error) {
      dispatch(<%= name %>Failure(error.message));
    }
  };
}

import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import SignupReducer from './signup/reducers';

export default function configureStore() {
  const initialState = {};
  const middleware = applyMiddleware(ReduxThunk, logger);
  const reducers = combineReducers({
    signup: SignupReducer,
  });

  return createStore(reducers, initialState, middleware);
}

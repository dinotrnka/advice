import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/state/store';
import Router from './src/config/router';

const store = configureStore();
console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;

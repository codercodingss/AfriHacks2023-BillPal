import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './src/src/store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export {AppWrapper};

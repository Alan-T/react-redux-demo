import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import BaseLayout from './layouts'
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

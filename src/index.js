import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// <Provider store={createStoreWithMiddleware(reducers)}>
// </Provider>
ReactDOM.render(
    <App />
  , document.getElementById('root'));
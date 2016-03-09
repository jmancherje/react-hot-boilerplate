import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

console.log(reducers);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
</Provider>
  , document.getElementById('root'));
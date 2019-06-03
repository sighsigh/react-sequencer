import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './app/App';
import rootReducer from './reducers';

import './index.css';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(
    rootReducer, 
    compose(middleware, 
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f)
    );

// Main Render
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

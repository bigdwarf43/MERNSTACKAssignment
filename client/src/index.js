import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css"
import App from './App';
import { reducers } from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);


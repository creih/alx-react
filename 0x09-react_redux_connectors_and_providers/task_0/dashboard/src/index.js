/*
In the index.js file:

    Create a store using createStore from Redux that would contain the uiReducer state
    Implement a provider passing the store that you created to the main App

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
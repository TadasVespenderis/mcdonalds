import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import ordersReducer from './reducers/ordersReducer';
import menuReducer from './reducers/menuReducer';
import categoriesReducer from './reducers/categoriesReducer';
import activeReducer from './reducers/activeReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'typeface-roboto';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    orders: ordersReducer,
    menu: menuReducer,
    categories: categoriesReducer,
    active: activeReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

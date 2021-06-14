import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.scss';
import SmartApp from './containers/appContainer';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

// devtools и thunk как в react-quiz3, но с composeWithDevTools как в пицце
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <SmartApp />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

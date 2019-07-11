import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';

// containers
import MenuBoard from './containers/MenuBoard';

// reducers
import ItemReducer from './reducers/item';

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    ItemReducer,
    window.devToolsExtension && window.devToolsExtension() // this piece of data allow us to connect our app with redux devtools extension
);


ReactDOM.render(
    <Provider store={store}>
        <MenuBoard />
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

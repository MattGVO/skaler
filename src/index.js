import React from 'react';
import ReactDOM from 'react-dom';
import './indexcss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './ducks/store'

ReactDOM.render(
<Provider store={Store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

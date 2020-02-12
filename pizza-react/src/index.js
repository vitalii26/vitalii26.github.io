import 'bootstrap/scss/bootstrap.scss'; 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter> 
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/bootstrap/css/bootstrap.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'


ReactDOM.render(

    <HashRouter>
        <App />
    </HashRouter>

    , document.getElementById('root'));
registerServiceWorker();

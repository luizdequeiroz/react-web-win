import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//serviceWorker.unregister();
serviceWorker.register();
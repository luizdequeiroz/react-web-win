import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));

//serviceWorker.unregister();
serviceWorker.register();
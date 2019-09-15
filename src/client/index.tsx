import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <ReactRouter.BrowserRouter>
    <App/>
    </ReactRouter.BrowserRouter>,
    document.getElementById('root')
)
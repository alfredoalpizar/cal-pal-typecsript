import * as ReactRouter from 'react-router-dom';
import * as React from 'react';
import Login from './Login';

const Router: React.FC = () => (
    <>
        <ReactRouter.Route path="/" component={Login}/>
    </>
);

export default Router

import { Route } from 'react-router-dom';
import * as React from 'react';
import Login from './Login';

const Router: React.FC = () => (
  <div style={{ flex: 1, padding: '10px' }}>
    <Route path="/" component={Login} />
  </div>
);

export default Router;

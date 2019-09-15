import * as React from 'react';
import SideBar from './components/SideBar';
import Router from './components/Router';

const App: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <SideBar />
    <Router />
  </div>

);

export default App;

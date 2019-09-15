import * as React from 'react';
import SideBar from './components/SideBar';
import Content from './components/Content';

const App: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <SideBar />
    <Content />
  </div>

);

export default App;

import * as React from 'react';
import SideBar from './SideBar';
import Content from './Content';

const App: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <SideBar />
    <Content />
  </div>

);

export default App;

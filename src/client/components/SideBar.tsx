import * as React from 'react';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => (
  <div id="nav">
    <ul style={{
      listStyleType: 'none', padding: 0, height: '500px', width: '200px',
    }}
    >
      <li><Link to="/">Search</Link></li>
      {/* <li><Link to="/macros">Macros</Link></li>
        <li><Link to="/entries">Entries</Link></li> */}
    </ul>
  </div>
);

export default SideBar;

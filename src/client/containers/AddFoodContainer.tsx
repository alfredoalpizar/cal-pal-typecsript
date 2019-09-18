import * as React from 'react';
import SearchContainer from './SearchContainer';
import MacrosDisplay from '../components/MacrosDisplay';

const AddFoodContainer: React.FC = () => (
  <div className="container">
    <div className="outerBox">
      <h1 id="header">Cal-Pal</h1>
      <MacrosDisplay />
      <SearchContainer />
    </div>
  </div>
);

export default AddFoodContainer;

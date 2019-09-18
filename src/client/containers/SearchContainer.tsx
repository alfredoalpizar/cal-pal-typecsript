import * as React from 'react';
import FoodsDisplay from '../components/FoodsDisplay';
import FoodSearch from '../components/FoodSearch';

const SearchContainer: React.FC = () => (
  <div className="innerbox">
    <h2>Search</h2>
    <FoodSearch />
    <FoodsDisplay />
  </div>
);

export default SearchContainer;

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { loadFoods } from '../actions/index';

const FoodSearch: React.FC = () => {
  const dispatch = useDispatch();
  const foodSearch = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      const query = target.value;
      dispatch(loadFoods(query));
    }
  };
  return (
    <div className="field">
      <input type="text" id="searchInput" onKeyUp={foodSearch} />
    </div>
  );
};

export default FoodSearch;

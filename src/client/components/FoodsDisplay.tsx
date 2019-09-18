import * as React from 'react';
import { useSelector } from 'react-redux';
import FoodDisplay from './FoodDisplay';
import { StoreState, Food } from '../../types/index';

const FoodsDisplay: React.FC = () => {
  const foodList = useSelector((state: StoreState) => state.foods.foodList);
  const foodMaker = (food: Food, i: number): JSX.Element => (
    <FoodDisplay
      food={food}
      i={i}
    />
  );
  return (
    <div className="displayBox">
      {/* <div className="Foods"> */}
      {foodList.map((food, i) => foodMaker(food, i))}
      {/* </div> */}
    </div>
  );
};
export default FoodsDisplay;

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addMacrosToday } from '../actions/index';
import { Food } from '../../types/index';

interface FoodProps {
  food: Food;
  i: number;
}
const FoodDisplay: React.SFC<FoodProps> = ({ food }: FoodProps) => {
  const dispatch = useDispatch();
  const calories = food.servings[1].macros.calories || 0;
  const {
    protein, fat, carbs, fiber,
  } = food.servings[1].macros;

  const { name: foodName } = food;
  const foodOnClick = (): void => {
    dispatch(addMacrosToday({
      calories, protein, fat, carbs, fiber,
    }));
  };
  return (
    <div className="foodItem">
      <h2>{foodName}</h2>
      <h2>
        {food.servings[1].quantity}
        {' '}
        {calories}
        {' '}
        cals
      </h2>
      <h2>
        {protein}
        {' '}
        protein
      </h2>
      <h2>
        {fat}
        {' '}
        fat
      </h2>
      <h2>
        {carbs}
        {' '}
        carbs
      </h2>
      <h2>
        {fiber}
        {' '}
        fiber
      </h2>
      <button type="button" onClick={foodOnClick}>ADD</button>
    </div>
  );
};

export default FoodDisplay;

import ActionTypes from '../constants/index';
import { Food, Action } from '../../types/index';

export interface FoodState{
  foodList: Food[];

}
const initialState: FoodState = {
  foodList: [],
};


const foodsReducer = (state: FoodState = initialState, action: Action): FoodState => {
  switch (action.type) {
    case ActionTypes.LOAD_FOODS:
      return {
        foodList: action.payload,
      };

    default:
      return state;
  }
};

export default foodsReducer;

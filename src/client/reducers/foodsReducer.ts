import ActionTypes from '../constants/index';
import { Food, LoadFoodsAction } from '../../types/index';

export interface FoodState{
  foodList: Food[];

}
const initialState: FoodState = {
  foodList: [],
};


const foodsReducer = (state: FoodState = initialState, action: LoadFoodsAction): FoodState => {
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

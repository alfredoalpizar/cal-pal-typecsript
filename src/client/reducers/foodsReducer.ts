import ActionTypes from '../constants/index';
import { FoodState, LoadFoodsAction } from '../../types/index';


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

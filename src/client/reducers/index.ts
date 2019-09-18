import { combineReducers } from 'redux';
import macrosReducer, { MacrosState } from './macrosReducer';
import foodsReducer, { FoodState } from './foodsReducer';
// import entriesReducer from './entriesReducer';
// import userReducer from './userReducer';

export interface StoreState {
  macros: MacrosState;
  foods: FoodState;
}
export default combineReducers<StoreState>({
  macros: macrosReducer,
  foods: foodsReducer,
  // entries: entriesReducer,
  // user: userReducer,
});

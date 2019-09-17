import { combineReducers } from 'redux';
import macrosReducer from './macrosReducer';
// import entriesReducer from './entriesReducer';
// import foodsReducer from './foodsReducer';
// import userReducer from './userReducer';

export default combineReducers({
  macros: macrosReducer,
  // entries: entriesReducer,
  // foods: foodsReducer,
  // user: userReducer,
});

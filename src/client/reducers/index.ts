import { combineReducers } from 'redux';
import macrosReducer from './macrosReducer';
import foodsReducer from './foodsReducer';

// import entriesReducer from './entriesReducer';
// import userReducer from './userReducer';


export default combineReducers({
  macros: macrosReducer,
  foods: foodsReducer,
  // entries: entriesReducer,
  // user: userReducer,
});

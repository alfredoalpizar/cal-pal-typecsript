import ActionTypes from '../constants/index';
import {
  Macros, Action,
} from '../../types/index';

export interface MacrosState {
  macrosPresets: ([]|Macros[]);
  selectedPreset: (void| Macros);
  macrosToday: Macros;
}

const initialState: MacrosState = {
  macrosPresets: [],
  selectedPreset: null,
  macrosToday: {
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: 0,
  },
};

const macrosReducer = (
  state = initialState,
  action: Action,
): MacrosState => {
  switch (action.type) {
    case ActionTypes.LOAD_MACROS_TODAY:
      return {
        ...state,
        macrosToday: action.payload,
      };

    case ActionTypes.ADD_MACROS_TODAY: {
      const {
        calories, protein, fat, carbs, fiber,
      } = action.payload;
      const newMacros = {
        calories: state.macrosToday.calories + calories,
        protein: state.macrosToday.protein + protein,
        fat: state.macrosToday.fat + fat,
        carbs: state.macrosToday.carbs + carbs,
        fiber: state.macrosToday.fiber + fiber,
      };
      return {
        ...state,
        macrosToday: newMacros,
      };
    }

    // case ActionTypes.ADD_MACROS_PRESETS:
    //   return {
    //     ...state,
    //     macrosPresets: [...state.macrosPresets, action.payload],
    //   };

    // case ActionTypes.LOAD_MACROS_PRESETS:
    //   return {
    //     ...state,
    //     macrosPresets: action.payload,
    //   };

    default:
      return state;
  }
};

export default macrosReducer;

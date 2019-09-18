import ActionTypes from '../client/constants/index';

export interface Macros {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber?: number;
}
export interface Serving {
    quantity: string;
    macros: Macros;
}
export interface Food {
    ndbno: number;
    name: string;
    manu: string;
    servings: Serving[];
}


export interface MacrosState {
    macrosPresets: ([]|Macros[]);
    selectedPreset: (void| Macros);
    macrosToday: Macros;
}

export interface FoodState{
    foodList: Food[];

}

export interface StoreState {
    foods: FoodState;
    macros: MacrosState;
}

export interface LoadFoodsAction {
    type: ActionTypes.LOAD_FOODS;
    payload: Food[];
}

export interface AddMacrosTodayAction {
    type: ActionTypes.ADD_MACROS_TODAY;
    payload: Macros;
}

export interface LoadMacrosTodayAction {
    type: ActionTypes.LOAD_MACROS_TODAY;
    payload: Macros;
}

// export interface AddMacrosPresetAction {
//     type: ActionTypes.ADD_MACROS_PRESETS;
//     payload: Macros;
// }

// export interface LoadMacrosPresetAction {
//     type: ActionTypes.LOAD_MACROS_PRESETS;
//     payload: Macros;
// }

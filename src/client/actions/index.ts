import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import ActionTypes from '../constants/index';
import {
  LoadFoodsAction, AddMacrosTodayAction, LoginAction,
  LoadMacrosTodayAction, Macros, Food, SignupAction, SignupData,
} from '../../types/index';


export const loadFoods = (query: string): Function => (dispatch: Dispatch): void => {
  fetch(`/api/search?q=${query}`)
    .then(res => res.json())
    .then((data: Food[]) => dispatch<LoadFoodsAction>({
      type: ActionTypes.LOAD_FOODS, payload: data,
    }))
    .catch(err => console.log('error:', err));
};

export const addMacrosToday = (macros: Macros): AddMacrosTodayAction => ({
  type: ActionTypes.ADD_MACROS_TODAY,
  payload: macros,
});


export const loadMacrosToday = () => (dispatch: ThunkDispatch<void, void, AnyAction>): void => {
  fetch(`/api/load-macros-today?date=${Date.now()}`)
    .then(res => res.json())
    .then(data => dispatch<LoadMacrosTodayAction>(
      { type: ActionTypes.LOAD_MACROS_TODAY, payload: data },
    ))
    // .then(data => console.log(`Data in front end from macros-today: ${data}`))
    .catch(err => console.log('error in getting /api/macros-today', err));
};

export const login = ({ username, password }: {
  username: string; password: string;
}) => (dispatch: ThunkDispatch<void, void, AnyAction>): void => {
  fetch('/auth/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(resp => resp.json())
    .then((data) => {
      if (data.err) return console.log('ERROR: ', data.err);
      const {
        uid, height, weight,
      } = data;
      return dispatch<LoginAction>({
        type: ActionTypes.LOGIN,
        payload: {
          username: data.username, uid, height, weight,
        },
      });
    })
    .catch(err => dispatch({ type: ActionTypes.LOGIN, payload: { err } }));
};

export const signup = (body: SignupData) => (
  dispatch: ThunkDispatch<void, void, AnyAction>,
): void => {
  fetch('/auth/signup', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(resp => resp.json())
    .then((data) => {
      if (data.err) return console.log(`ERROR POSTING SIGNUP: ${data.err}`);
      const {
        uid, height, weight,
      } = data;
      // return console.log(data);
      return dispatch<SignupAction>({
        type: ActionTypes.SIGNUP,
        payload: {
          username: data.username, uid, height, weight,
        },
      });
    })
    .catch(err => console.log(`ERROR POSTING SIGNUP: ${err}`));
};

export const verifyToken = () => (dispatch: ThunkDispatch<void, void, AnyAction>) => {
  fetch('/auth/verify', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(resp => resp.json())
    .then((data) => {
      if (data.err) console.log('ERROR: ', data.err);
      const {
        username, uid, height, weight,
      } = data;
      return dispatch({
        type: ActionTypes.LOGIN,
        payload: {
          username, uid, height, weight,
        },
      });
    })
    .catch(err => console.log('ERROR: ', err));
};
// export const addEntry = entry => (dispatch) => {};

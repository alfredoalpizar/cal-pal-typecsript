import { Dispatch } from 'redux';
import ActionTypes from '../constants/index';

export const loadFoods = (query: string): Function => (dispatch: Dispatch): void => {
  fetch(`/api/search?q=${query}`)
    .then(res => res.json())
    .then(data => dispatch({ type: ActionTypes.LOAD_FOODS, payload: data }))
    .catch(err => console.log('error:', err));
};

export const addMacrosToday = macros => ({
  type: ActionTypes.ADD_MACROS_TODAY,
  payload: macros,
});


export const loadMacrosToday = () => (dispatch: Dispatch): void => {
  fetch(`/api/load-macros-today?date=${Date.now()}`)
    .then(res => res.json())
  // .then(data => dispatch({ type: types.LOAD_MACROS_TODAY, payload: data }))
    .then(data => console.log(`Data in front end from macros-today: ${data}`))
    .catch(err => console.log('error in getting /api/macros-today', err));
};

// export const login = ({ username, password }) => (dispatch) => {
//   fetch('/auth/login', {
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   })
//     .then(resp => resp.json())
//     .then((data) => {
//       if (data.err) return dispatch({ type: types.LOGIN, payload: { err: data.err } });
//       const {
//         uid, height, weight,
//       } = data;
//       return dispatch({
//         type: types.LOGIN,
//         payload: {
//           username: data.username, uid, height, weight,
//         },
//       });
//     })
//     .catch(err => dispatch({ type: types.LOGIN, payload: { err } }));
// };

// export const signup = ({ username, password }) => (dispatch) => {
//   fetch('/auth/signup', {
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   })
//     .then(resp => resp.json())
//     .then((data) => {
//       if (data.err) return dispatch({ type: types.LOGIN, payload: { err: data.err } });

//       const {
//         uid, height, weight,
//       } = data;
//       return dispatch({
//         type: types.SIGNUP,
//         payload: {
//           username: data.username, uid, height, weight,
//         },
//       });
//     })
//     .catch(err => dispatch({ type: types.SIGNUP, payload: { err } }));
// };

// export const verifyToken = () => (dispatch) => {
//   fetch('/auth/verify', {
//     method: 'GET',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then(resp => resp.json())
//     .then((data) => {
//       if (data.err) return dispatch({ type: types.LOGIN, payload: { err: data.err } });
//       const {
//         username, uid, height, weight,
//       } = data;
//       return dispatch({
//         type: types.LOGIN,
//         payload: {
//           username, uid, height, weight,
//         },
//       });
//     })
//     .catch(err => dispatch({ type: types.LOGIN, payload: { err } }));
// };
// export const addEntry = entry => (dispatch) => {};

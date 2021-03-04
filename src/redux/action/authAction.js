import { LOGOUT } from '../type';
import {AUTH_FAILED, AUTH_START, AUTH_SUCCESS, NULLIFY_ERROR} from '../type';

// export const loginAction = (payload) => {
//   return {
//     type: LOGIN,
//     payload,
//   };
// };

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const loginAction = (payload) => {
    return async (dispatch) => {
      try {
        dispatch({type: AUTH_START});
        const {username, token} = response.data;
        await AsyncStorage.setItem('token', token);
        dispatch({type: AUTH_SUCCESS, payload: {username}});
        dispatch(fetchCartAction(id));
      } catch (err) {
        dispatch({type: AUTH_FAILED, payload: err.response.data.error});
      }
    };
  };
  export const dismissErrorAction = () => {
    return {
      type: NULLIFY_ERROR,
    };
  };
  
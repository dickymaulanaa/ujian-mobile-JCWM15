import {
    AUTH_FAILED,
    AUTH_LOGOUT,
    AUTH_START,
    AUTH_SUCCESS,
    NULLIFY_ERROR,
  } from '../type';

const INITIAL_STATE ={
    username :'',
    isSignedIn : false,
    error: false,
    errorMessage: '',
    loading: false,

}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AUTH_START:
        return {
          ...state,
          loading: true,
        };
      case AUTH_SUCCESS:
        return {
          ...action.payload,
          isSignedIn: true,
        };
      case AUTH_FAILED:
        return {
          ...state,
          error: true,
          errorMessage: action.payload,
        };
      case NULLIFY_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      case AUTH_LOGOUT:
        return INITIAL_STATE;
      default:
        return state;
    }
  };
  
// import { LOGIN, LOGOUT } from '../type';

// const INITIAL_STATE = {
//   username: '',
//   isSignedIn: false,
// };

// export const authReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         username: action.payload,
//         isSignedIn: true,
//       };
//     case LOGOUT:
//       return INITIAL_STATE;
//     default:
//       return state;
//   }
// };

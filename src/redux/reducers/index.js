import { combineReducers } from "redux";


const initialState = {
  isLogin : localStorage.getItem('token') != null,
  token : localStorage.getItem('token'),
  username : localStorage.getItem('username'),
}

const reducers = combineReducers({
  // key => nama Reducer
  // value => fungsi Reducer
  auth: (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLogin: true,
          username: action.payload.username,
          token: action.payload.username
        };
      case "LOGOUT":
        return {
          ...state,
          isLogin: false,
          username: null
        };
      default:
        return {
          ...state,
        };
    }
  },
});

export default reducers;

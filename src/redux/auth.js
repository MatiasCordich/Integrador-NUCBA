import axios from 'axios'

const defaultValue = {
  userInfo: {},
  token: null,
  error: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const ERROR = "ERROR";

export default function AuthReducer(state = defaultValue, { type, payload }) {
  switch (type) {
    case LOGIN:
      return { ...state, token: payload, error: false };
    case LOGOUT:
      return defaultValue;
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}

export const loginAction = ({ email, password }) => async (dispatch) => {

    try {
      const res = await axios.post('https://back-sandbox.herokuapp.com/api/auth/login', {email,password});

      const token = res.data.token

      dispatch({
        type: LOGIN,
        payload: token,
        token: localStorage.setItem("token", token),
      });
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
};

export const logoutAction = () => dispatch => {
    dispatch({type: LOGOUT})
}
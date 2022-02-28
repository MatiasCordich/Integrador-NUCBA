import axios from 'axios'
import { toast } from "react-toastify";

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
      toast.error('Contraseña o Email inválido', {
        className: 'error-toast-register',
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
};

export const logoutAction = () => dispatch => {
    dispatch({type: LOGOUT})
    toast.success('Te has deslogueado', {
      className:'success-toast-register',
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
}
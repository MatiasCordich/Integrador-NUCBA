import axios from "axios";
import { toast } from "react-toastify";

const defaultValue = {
  userInfo: {},
  token: null,
  error: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const ERROR = "ERROR";

export default function RegisterReducer(state = defaultValue,{ type, payload }) {
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

export const registerAction =
  ({ email, password, name, lastName}) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        "https://back-sandbox.herokuapp.com/api/auth/register",
        {
          email,
          password,
          name,
          lastName,
        }
      );
      dispatch({
        type: LOGIN,
        payload: res.data.token,
        token: localStorage.setItem("token", res.data.token),
      });
      toast.success('Usuario creado exitosamente', {
        className: "success-toast-register",
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    } catch (error) {
      dispatch({type: ERROR});
      toast.error('Usuario existente', {
        className: "error-toast-register",
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
  }
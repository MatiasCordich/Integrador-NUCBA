import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./api";
import AuthReducer from './auth'
import RegisterReducer from './register'

const rootReducer = combineReducers({
    user: AuthReducer,
    register: RegisterReducer,
    news: newsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
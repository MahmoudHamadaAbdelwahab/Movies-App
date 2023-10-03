import { createStore  , applyMiddleware} from 'redux'
import { moviesReducer } from "../Reducer/moviesReducer";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
// 1- create store
export const StoreCreate = createStore(moviesReducer ,   applyMiddleware(thunk) );  
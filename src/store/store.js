import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from  "redux-thunk"
import {reducer as formReducer} from "redux-form";
import userReducers from "../redux/users-reducer";


let reducers = combineReducers({
    form:formReducer,
    users:userReducers,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;

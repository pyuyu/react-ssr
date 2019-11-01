import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchFeatures } from "./server/api.js";

export const initializeSession = () => ({
    type: "INITIALIZE_SESSION",
});

export const login = () => ({
    type: "LOGIN",
});

export const logout = () => ({
    type: "LOGOUT",
});

const storeData = (data) => ({
    type: "STORE_DATA",
    data,
});

export const fetchData = () => (dispatch) =>
fetchFeatures().then(res => dispatch(storeData(res)));


const sessionReducer = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SESSION" :
            return false;
        case "LOGOUT" :
            console.log('logout!')
            return false;
        case "LOGIN":
            console.log('login!')
            return true;
        default: 
            return state;
    }
};

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers({
    loggedIn: sessionReducer,
    data: dataReducer,
});

export default (initialState) => createStore(reducer, initialState, applyMiddleware(thunkMiddleware));

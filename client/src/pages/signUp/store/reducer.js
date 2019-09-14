import {fromJS} from 'immutable';
import {NAMEINPUTCHANGE, PASSWORDINPUTCHANGE, USERLOGIN} from "./constants";


const defaultState = fromJS({
    inputName: "",
    inputPassword: "",
    login: false,
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case NAMEINPUTCHANGE:
            return state.set("inputName", action.value);
        case PASSWORDINPUTCHANGE:
            return state.set("inputPassword", action.value);
        case USERLOGIN :
            return state.set("login", action.value);
        default:
            return state;
    }
};
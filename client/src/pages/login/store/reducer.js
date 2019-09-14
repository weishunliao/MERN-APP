import {fromJS} from 'immutable';
import {NAMEINPUTCHANGE, PASSWORDINPUTCHANGE, USERLOGIN, USERLOGOUT, USERLOGINFAIL} from "./constants";


const defaultState = fromJS({
    inputName: "",
    inputPassword: "",
    login: false,
    loginFail:false,
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case NAMEINPUTCHANGE:
            return state.set("inputName", action.value);
        case PASSWORDINPUTCHANGE:
            return state.set("inputPassword", action.value);
        case USERLOGIN :
            return state.set("login", action.value).set("loginFail", false);
        case USERLOGOUT :
            return state.set("login", action.value);
        case USERLOGINFAIL :
            return state.set("loginFail", action.value);
        default:
            return state;
    }
};
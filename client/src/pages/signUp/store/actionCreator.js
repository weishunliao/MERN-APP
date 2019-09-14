import {NAMEINPUTCHANGE, PASSWORDINPUTCHANGE, USERLOGIN} from "./constants";
import axios from 'axios';

export const handleNameInputChangeAction = (newValue) => {
    return {
        type: NAMEINPUTCHANGE,
        value: newValue,
    }
};

export const handlePasswordInputChangeAction = (newValue) => {
    return {
        type: PASSWORDINPUTCHANGE,
        value: newValue,
    }
};

export const handleSubmitAction = (name, password) => {
    return (dispatch) => {
        axios.post('/api/signUp', {"username": name, "password": password}).then((resp) => {
            if (resp.status === 201) {
                dispatch({
                    type: USERLOGIN,
                    value: true,
                });
            }else {
                dispatch({
                    type: USERLOGIN,
                    value: false,
                });
            }
        }).catch(() => {
            dispatch({
                type: USERLOGIN,
                value: false,
            });
        });
    };
};

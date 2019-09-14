import {NAMEINPUTCHANGE, PASSWORDINPUTCHANGE, USERLOGIN, USERLOGOUT,USERLOGINFAIL} from "./constants";
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
        axios.get('http://localhost:3000/api/users/' + name).then((resp) => {
            console.log(resp);
            if (resp.data.data !== null && name === resp.data.data.name && password === resp.data.data.password) {
                dispatch({
                    type: USERLOGIN,
                    value: true,
                });
            } else {
                window.alert("Wrong password or name.");
                dispatch({
                    type: USERLOGINFAIL,
                    value: true,
                });
            }
        }).catch(() => {
            window.alert("Wrong password or name.");
            dispatch({
                type: USERLOGINFAIL,
                value: true,
            });
        });
    };
};

export const getHandleSignOutAction = () => {
    return {
        type:USERLOGOUT,
        value:false,
    }
};
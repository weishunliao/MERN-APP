import * as constants from "./constants";
import axios from 'axios';
import {UPDATESEARCHLIST} from "./constants";

export const getHandleInputFocusAction = () => {
    return {
        type: constants.INPUTFOCUS,
    }
};

export const getHandleInputBlurAction = () => {
    return {
        type: constants.INPUTBLUR,
    }
};

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};


export const getSearchSuggestionList = () => {
    return (dispatch) => {
        axios.get('/api/suggestions').then((resp) => {
            let action = {
                type: UPDATESEARCHLIST,
                data: shuffle(resp.data.data[0].list),
            };
            dispatch(action);
        }).catch(() => {
            console.log('error');
        });
    }
};

export const getHandleMouseInAction = () => {
    return {
        type: constants.MOUSEIN,
    }
};

export const getHandleMouseOutAction = () => {
    return {
        type: constants.MOUSEOUT,
    }
};
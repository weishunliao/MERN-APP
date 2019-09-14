import {fromJS} from 'immutable';
import {FETCHPOST} from "./constants";


const defaultState = fromJS({
    post:{}
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCHPOST:
            return state.set('post', fromJS(action.post));
        default:
            return state;

    }
};
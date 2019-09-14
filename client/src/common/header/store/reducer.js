import * as constants from "./constants";
import {fromJS} from 'immutable';


const defaultState = fromJS({
    focused: false,
    searchSuggestionList: [],
    mouseIn: false,
});


export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case (constants.INPUTFOCUS) :
            return state.set('focused', true);
        case (constants.INPUTBLUR) :
            return state.set('focused', false);
        case (constants.MOUSEIN) :
            return state.set('mouseIn', true);
        case (constants.MOUSEOUT) :
            return state.set('mouseIn', false).set('focused', false);
        case (constants.UPDATESEARCHLIST) :
            return state.set('searchSuggestionList', action.data);
        default:
            return state;
    }
};
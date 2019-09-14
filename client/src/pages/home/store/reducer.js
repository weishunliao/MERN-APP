import {fromJS} from 'immutable';
import {BACKTOP, GETARTICLELIST, GETPOPULARLIST} from "./constants";


const defaultState = fromJS({
    topics: [
        "HOME", "ONEZERO", "ELEMENTAL", "GEN", "ZORA", "FORGE", "HUMAN PARTS", "MARKER", "SELF",
        "TECH"],
    articles: [],
    popularList:[],
    atTop: true
});

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GETARTICLELIST:
            return state.set('articles', fromJS(action.articles));
        case GETPOPULARLIST:
            return state.set('popularList', fromJS(action.popularList));
        case BACKTOP:
            return state.set('atTop', fromJS(action.value));
        default:
            return state;

    }
};
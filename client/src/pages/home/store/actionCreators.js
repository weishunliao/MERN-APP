import {BACKTOP, GETARTICLELIST, GETPOPULARLIST} from "./constants";
import axios from "axios";

export const getArticleListAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/articles').then((resp) => {
            dispatch({
                type:GETARTICLELIST,
                articles: resp.data.data,
            });
        }).catch(() => {
            console.log("error");
        });
    }
};

export const getPopularListAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/populars').then((resp) => {
            dispatch({
                type:GETPOPULARLIST,
                popularList: resp.data.data,
            });
        }).catch(() => {
            console.log("error");
        });
    }
};

export const getScrollAction = (top) => {
    return {
        type: BACKTOP,
        value: top,
    }
};

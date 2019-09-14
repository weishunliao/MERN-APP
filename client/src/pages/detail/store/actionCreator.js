import {FETCHPOST} from "./constants";
import axios from "axios";

export const getPostAction = (id) => {
    return (dispatch) => {
        axios.get('/api/details/' + id).then((resp) => {
            console.log(resp);
            dispatch({
                type:FETCHPOST,
                post: resp.data.data,
            });
        }).catch(() => {
            console.log("error");
        });
    }
};
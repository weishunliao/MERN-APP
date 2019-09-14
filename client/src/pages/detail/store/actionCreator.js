import {FETCHPOST} from "./constants";
import axios from "axios";

export const getPostAction = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/details/' + id).then((resp) => {
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
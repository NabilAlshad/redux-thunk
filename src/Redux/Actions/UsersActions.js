import axios from "axios";
import { get_users_request, user_failed, user_success } from "../Types";

export const usersList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: get_users_request,
      });
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      dispatch({
        type: user_success,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: user_failed,
        payload: error.message,
      });
    }
  };
};

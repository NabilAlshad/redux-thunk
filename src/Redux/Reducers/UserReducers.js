import { get_users_request, user_failed, user_success } from "../Types";
const initialState = {
  loading: true,
  error: "",
  users: [],
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case get_users_request:
      return {
        ...state,
        loading: true,
      };
    case user_success:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case user_failed:
      return {
        ...state,
        loading: true,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;

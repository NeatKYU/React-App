import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  //fake reducer
  //changeMe: () => 10
  posts: PostReducer,
  users: UserReducer,
});

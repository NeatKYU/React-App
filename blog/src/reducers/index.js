import { combineReducers } from 'redux';
import PostReducer from './PostReducer';

export default combineReducers({
	//fake reducer
	//changeMe: () => 10
	posts: PostReducer
});
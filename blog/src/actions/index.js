import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

/* 
export const fetchPosts = () => {
    //그냥 하면 action return값은 js형태여야함
    //redux-thunk를 사용하면 return값으로 함수도 가능
    return function(dispatch, getState){
        const promise = jsonPlaceholder.get('/posts')

        return {
            type: 'FETCH_POSTS',
            payload: promise
        };
    }
    
}; */
// -------------->> 간소화

export const fetchPostsAndUsers = () => async (dispatch) => {
  await dispatch(fetchPosts());
}

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = (id) => async (dispatch) => {
  // user를 개별적으로 가져오기위해 id를 넣어줌
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};


 //memoize를 사용해서 같은 userid를 가지면
 // 딱 한번만 요청되도록 할 수 있다.
 // 하지만 나중에 userid정보가 바뀌어서 다시 불러와야 할 때
 // 그러지 못한다는 단점이 있다. 그래서 완벽한 해결책은 아니다.
/* 
export const fetchUsers = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};
const _fetchUser = _.memoize( async (id, dispatch) => {
  // user를 개별적으로 가져오기위해 id를 넣어줌
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
});
 */
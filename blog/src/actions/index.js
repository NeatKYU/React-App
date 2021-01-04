import jsonPlaceholder from '../apis/jsonPlaceholder';

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

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    console.log("res=", response)

    dispatch({ type: 'FETCH_POSTS', payload: response })
}
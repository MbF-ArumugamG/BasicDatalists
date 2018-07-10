import 'whatwg-fetch';
import Axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
export const FETCH_LIST = 'FETCH_LIST';

// Sync Action
export function fetchList(user) {
  return {
    type: FETCH_LIST,
    user,
  };
}

//Async Action
export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchList(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
 }


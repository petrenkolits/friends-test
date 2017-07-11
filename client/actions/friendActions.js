import axios from 'axios';

export function listFriends() {
  return dispatch => {
    return axios.get('/api/friends');
  };
}

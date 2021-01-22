import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const POST_CHARACTERS = 'POST_CHARACTERS';



export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_CHARACTERS_FAILURE}));
};

export const postCharacters = (data) => dispatch => {
    axios
      .post('http://localhost:3333/smurfs', data)
      .then(res =>
        dispatch({ type: POST_CHARACTERS, payload: res.data })
      )
      .catch(err => dispatch({ type: FETCH_CHARACTERS_FAILURE}));
  };
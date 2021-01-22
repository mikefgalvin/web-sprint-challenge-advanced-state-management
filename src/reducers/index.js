import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE, POST_CHARACTERS } from '../actions/index';

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_CHARACTERS):
        return({
          ...state,
          isFetching: true,
          error:'',
          smurfs:''
        });
      case(FETCH_CHARACTERS_SUCCESS):
        return({
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error:''
        })
      case(FETCH_CHARACTERS_FAILURE):
        return({
          ...state,
          error: 'Wrrronnggggggg',
          isFetching: false
        });
        case(POST_CHARACTERS):
        return({
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error:'',
        });
        default:
            return state;
    }
}


export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
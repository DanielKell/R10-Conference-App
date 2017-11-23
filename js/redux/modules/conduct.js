//fetch code of conduct

//Name actions

const FETCH_CONDUCT = 'fetch_conduct';

//Create action creators

export function fetchCodeOfConduct(data) {
    return {
        type: FETCH_CONDUCT,
        payload: data
    }
}

//Make async action creator

export function fetchingConduct() {
    return (dispatch) => {
        fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
            .then(response => response.json())
            .then(json => {
            const codeOfConduct = json;

            dispatch(fetchCodeOfConduct(codeOfConduct));
            })
    }
}
// Create and export reducer
const initialState = {
    loading: true,
    codeOfConductData: []
}

 export default function conductReducer(state = initialState, action) {
     switch (action.type) {

         case FETCH_CONDUCT:
             return {
                 ...state,
                 loading: false,
                 codeOfConductData: action.payload
             };
         default:
             return state;
     }
 }

//Then import and combine in reducers.js

//Refactor about container to pull in redux data and pass it in correctly
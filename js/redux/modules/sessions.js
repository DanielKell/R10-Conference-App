import { formatSessionData } from '../../lib/dataHelpers';

//Name actions

const FETCH_SESSIONS = 'fetch_sessions';

//Create action creators

export function fetchSessions(placeholder) {
    return {
        type: FETCH_SESSIONS,
        payload: placeholder
    }
}

//Make async action creator

export function fetchingSessions() {
    return (dispatch) => {
        fetch('https://r10app-95fea.firebaseio.com/sessions.json')
            .then(response => response.json())
            .then(data => formatSessionData(data))
            .then(json => {
            const sessionsData = json;

            dispatch(fetchSessions(sessionsData));
            })
    }
}

// Create and export reducer

const initialState = {
    loading: true,
    sessionsData: []
}

 export default function conductReducer(state = initialState, action) {
     switch (action.type) {

         case FETCH_SESSIONS:
             return {
                 ...state,
                 loading: false,
                 sessionsData: action.payload
                 //Removed action.payload because don't need payload?
             };
         default:
             return state;
     }
 }
import { formatSessionData } from "../../lib/dataHelpers";

const FETCH_SESSIONS_BEGIN = "fetch_sessions_begin";
const FETCH_SESSIONS = "fetch_sessions";
const FETCH_SESSIONS_ERROR = "fetch_sessions_error";


export function fetchSessionsBegin() {
  return {
    type: FETCH_SESSIONS_BEGIN
  };
}

export function fetchSessions(session) {
  return {
    type: FETCH_SESSIONS,
    payload: session
  };
}

export function fetchSessionsError(err) {
  return {
    type: FETCH_SESSIONS_ERROR,
    error: err
  };
}

export function fetchingSessions() {
  return dispatch => {
    dispatch(fetchSessionsBegin());
    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
      .then(response => response.json())
      .then(data => formatSessionData(data))
      .then(json => {
        const sessionsData = json;

        dispatch(fetchSessions(sessionsData));
      })
        .catch(err => {
      dispatch(fetchSessionsError(err));
    })
  };
}

const initialState = {
  loading: false,
  sessionsData: [],
  error: ''
};

export default function conductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SESSIONS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SESSIONS:
      return {
        ...state,
        loading: false,
        sessionsData: action.payload
      };
    case FETCH_SESSIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

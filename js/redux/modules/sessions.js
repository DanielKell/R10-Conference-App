import { formatSessionData } from "../../lib/dataHelpers";

const FETCH_SESSIONS = "fetch_sessions";

export function fetchSessions(placeholder) {
  return {
    type: FETCH_SESSIONS,
    payload: placeholder
  };
}

export function fetchingSessions() {
  return dispatch => {
    fetch("https://r10app-95fea.firebaseio.com/sessions.json")
      .then(response => response.json())
      .then(data => formatSessionData(data))
      .then(json => {
        const sessionsData = json;

        dispatch(fetchSessions(sessionsData));
      });
  };
}

const initialState = {
  loading: true,
  sessionsData: []
};

export default function conductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SESSIONS:
      return {
        ...state,
        loading: false,
        sessionsData: action.payload
      };
    default:
      return state;
  }
}

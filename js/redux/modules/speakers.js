import { formatDataObject } from "../../lib/dataHelpers";

export const LOAD_SPEAKER_DATA_BEGIN = "LOAD_SPEAKER_DATA_BEGIN";
export const LOAD_SPEAKER_DATA = "LOAD_SPEAKER_DATA";
export const LOAD_SPEAKER_DATA_ERROR = "LOAD_SPEAKER_DATA_ERROR";

export function loadSpeakerDataBegin() {
  return {
    type: LOAD_SPEAKER_DATA_BEGIN
  };
}

export function loadSpeakerData(speakerData) {
  return {
    type: LOAD_SPEAKER_DATA,
    payload: speakerData
  };
}

export function loadSpeakerDataError(err) {
  return {
    type: LOAD_SPEAKER_DATA_ERROR,
    error: err
  };
}

export function fetchSpeakerData(speakerID) {
  return dispatch => {
    dispatch(loadSpeakerDataBegin());
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`
    )
      .then(response => response.json())
      .then(data => formatDataObject(data))
      .then(json => {
        const speakerData = json;

        dispatch(loadSpeakerData(speakerData));
      })
      .catch(err => {
        dispatch(loadSpeakerDataError(err));
      });
  };
}

const initialState = {
  loading: false,
  speakerData: {},
  error: ""
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_SPEAKER_DATA_BEGIN:
      return {
        ...state,
        loading: true
      };

    case LOAD_SPEAKER_DATA:
      return {
        ...state,
        loading: false,
        speakerData: action.payload
      };

    case LOAD_SPEAKER_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

import { formatDataObject } from "../../lib/dataHelpers";

export const LOAD_SPEAKER_DATA = "LOAD_SPEAKER_DATA";

export function loadSpeakerData(speakerData) {
  return {
    type: LOAD_SPEAKER_DATA,
    payload: speakerData
  };
}

export function fetchSpeakerData(speakerID) {
  return dispatch => {
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`
    )
      .then(response => response.json())
      .then(data => formatDataObject(data))
      .then(json => {
        const speakerData = json;

        dispatch(loadSpeakerData(speakerData));
      })
      .catch(errors => {
        return console.log(errors);
      });
  };
}

const initialState = {
  loading: true,
  speakerData: {}
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SPEAKER_DATA:
      return {
        ...state,
        loading: false,
        speakerData: action.payload
      };

    default:
      return state;
  }
}

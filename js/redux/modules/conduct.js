const FETCH_CONDUCT_BEGIN = "fetch_conduct_begin";
const FETCH_CONDUCT = "fetch_conduct";
const FETCH_CONDUCT_ERROR = "fetch_conduct_end";

export function fetchCodeOfConductBegin() {
  return {
    type: FETCH_CONDUCT_BEGIN
  };
}

export function fetchCodeOfConduct(data) {
  return {
    type: FETCH_CONDUCT,
    payload: data
  };
}

export function fetchCodeOfConductError(err) {
  return {
    type: FETCH_CONDUCT_ERROR,
    error: err
  };
}

export function fetchingConduct() {
  return dispatch => {
    dispatch(fetchCodeOfConductBegin())
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(response => response.json())
      .then(json => {
        const codeOfConduct = json;

        dispatch(fetchCodeOfConduct(codeOfConduct));
      })
      .catch(err => {
        dispatch(fetchCodeOfConductError(err));
      });
  };
}

const initialState = {
  loading: false,
  codeOfConductData: [],
  error: ""
};

export default function conductReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_CONDUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CONDUCT:
      return {
        ...state,
        loading: false,
        codeOfConductData: action.payload
      };

    case FETCH_CONDUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}

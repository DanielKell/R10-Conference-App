const FETCH_CONDUCT = "fetch_conduct";

export function fetchCodeOfConduct(data) {
  return {
    type: FETCH_CONDUCT,
    payload: data
  };
}

export function fetchingConduct() {
  return dispatch => {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(response => response.json())
      .then(json => {
        const codeOfConduct = json;

        dispatch(fetchCodeOfConduct(codeOfConduct));
      });
  };
}

const initialState = {
  loading: true,
  codeOfConductData: []
};

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

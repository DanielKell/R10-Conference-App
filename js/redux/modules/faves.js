import { queryFaves } from "../../config/models";

const SET_ALL_FAVOURITES = "SET_ALL_FAVOURITES";

export const setAllFave = allFavourites => ({
  type: SET_ALL_FAVOURITES,
  allFavourites: allFavourites
});

const initialState = {
  allFavourites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_FAVOURITES:
      return {
        ...state,
        allFavourites: action.allFavourites
      };
    default:
      return state;
  }
};

export const getAllFaves = () => {
  return dispatch => {
    const allFave = queryFaves().reduce((acc, curr) => {
      acc.push(curr.id);
      return acc;
    }, []);
    dispatch(setAllFave(allFave));
  };
};

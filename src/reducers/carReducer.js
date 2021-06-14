import {
  SET_LOADING,
  GET_CARS,
} from '../actions/actionTypes';

const initialState = {
  cars: [],
  loading: undefined,
};

export default function githubReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

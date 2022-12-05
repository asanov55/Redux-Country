import { SET_SEARCH } from './controls-actions';

const initalState = {
  search: '',
  regyon: '',
};

export const controlsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};

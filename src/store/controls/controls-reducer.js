import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from './controls-actions';

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
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };
    case CLEAR_CONTROLS:
      return initalState;
    default:
      return state;
  }
};

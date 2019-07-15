import * as Types from './../constants/ActionTypes';

const initialState = [];

const bannerText = (state = initialState, action) => {
  switch (action.type) {
    case Types.BANNER_TEXT:
      state = action.bannerText;
      return [...state];
    default:
      return [...state];
  }
};

export default bannerText;

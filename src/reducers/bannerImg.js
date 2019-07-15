import * as Types from './../constants/ActionTypes';

const initialState = [];

const bannerImg = (state = initialState, action) => {
  switch (action.type) {
    case Types.BANNER_IMG:
      state = action.bannerImg;
      return [...state];
    default:
      return [...state];
  }
};

export default bannerImg;

import * as Types from './../constants/ActionTypes';

const initialState = [];

const pages = (state = initialState, action) => {
  switch (action.type) {
    case Types.PAGE_ALL:
      state = action.pages;
      return [...state];
    default:
      return [...state];
  }
};

export default pages;

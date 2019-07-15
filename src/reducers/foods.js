import * as Types from './../constants/ActionTypes';

const initialState = [];

const foods = (state = initialState, action) => {
  switch (action.type) {
    case Types.FOOD_LIST:
      state = action.foods;
      return [...state];
    default:
      return [...state];
  }
};

export default foods;

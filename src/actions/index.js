import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actPageAllRequest = () => {
  return dispatch => {
    return callApi('pages', 'GET', null).then(res => {
      dispatch(actPageAll(res.data));
    });
  };
};
export const actPageAll = pages => {
  return {
    type: Types.PAGE_ALL,
    pages,
  };
};

export const actBannerTextRequest = () => {
  return dispatch => {
    return callApi('banners', 'GET', null).then(res => {
      dispatch(actBannerText(res.data));
    });
  };
};

export const actBannerText = bannerText => {
  return {
    type: Types.BANNER_TEXT,
    bannerText,
  };
};

export const actBannerImgRequest = () => {
  return dispatch => {
    return callApi('images-slide', 'GET', null).then(res => {
      dispatch(actBannerImg(res.data));
    });
  };
};

export const actBannerImg = bannerImg => {
  return {
    type: Types.BANNER_IMG,
    bannerImg,
  };
};

export const actFoodsRequest = () => {
  return dispatch => {
    return callApi('foods', 'GET', null).then(res => {
      dispatch(actFoods(res.data));
    });
  };
};

export const actFoods = foods => {
  return {
    type: Types.FOOD_LIST,
    foods,
  };
};

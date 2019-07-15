import { combineReducers } from 'redux';
import pages from './pages';
import bannerText from './bannerText';
import bannerImg from './bannerImg';
import foods from './foods';

const myReducer = combineReducers({
  pages,
  bannerText,
  bannerImg,
  foods,
});

export default myReducer;

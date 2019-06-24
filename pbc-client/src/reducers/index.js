import { combineReducers } from 'redux';
import authReducers from './authReducers';
import recipeReducer from './recipeReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  auth: authReducers,
  recipes: recipeReducer,
  search: searchReducer
})

export default rootReducer;

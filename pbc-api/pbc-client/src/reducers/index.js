import { combineReducers } from 'redux';
import authReducers from './authReducers';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
  auth: authReducers,
  recipes: recipeReducer
})

export default rootReducer;

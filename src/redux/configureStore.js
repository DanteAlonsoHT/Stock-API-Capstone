import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stocksReducer from './stocks/stocks';

const reducer = combineReducers({
  stocks: stocksReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;

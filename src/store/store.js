import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './ProductorFeture/ProductorReducer';
import { thunk } from 'redux-thunk';

// Combine reducers
const rootReducer = combineReducers({
    product:productReducer,

});

// Create the store
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;

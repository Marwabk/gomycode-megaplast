import { createStore, combineReducers } from "redux"
import cartReducer from './reducers/CartReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';

const store = createStore(combineReducers({
    cartReducer,
    shoppingCartReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
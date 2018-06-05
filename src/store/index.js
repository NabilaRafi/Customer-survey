import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers/root-reducer";

const storeWithMiddleware = applyMiddleware(thunk)(createStore)
const store = storeWithMiddleware(rootReducer)

export default store;
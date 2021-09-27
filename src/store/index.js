import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers';
import rootSaga from "../actions";

const sagaMiddleware=createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;
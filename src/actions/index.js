import { all } from 'redux-saga/effects'
import global from "./global";
import setting from './setting';

export default function* rootSaga() {
    yield all([
        global(),
        setting()
    ])
}
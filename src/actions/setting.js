import { put, call, takeEvery } from 'redux-saga/effects';

export const UPDATE_SETTING = 'UPDATE_SETTING';

function* changeSetting({ payload }) {
    debugger
    try {
        yield put({ type: UPDATE_SETTING, payload })
    } catch (error) {
        yield put({ type: UPDATE_SETTING, error })
    }
}

const settingSaga = function* () {
    yield takeEvery("setting/changeSetting", changeSetting);
}

export default settingSaga;
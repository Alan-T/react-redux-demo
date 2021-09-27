import { put, call, takeEvery } from 'redux-saga/effects';

export const UPDATE_TITLE = 'UPDATE_TITLE';

function* setDefaultSetting({ payload }) {
    try {
        yield put({ type: UPDATE_TITLE, payload })
    } catch (error) {
        yield put({ type: UPDATE_TITLE, error })
    }
}

const globalSaga = function* () {
    yield takeEvery("global/updateSetting", setDefaultSetting);
}

export default globalSaga;

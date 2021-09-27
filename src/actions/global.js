import { put, call, takeEvery } from 'redux-saga/effects';

export const FETCH_NOTICES = 'FETCH_NOTICES';
export const CLEAR_NOTICES = 'CLEAR_NOTICES';

function* fetchNotices({ payload }) {
    try {
        yield put({ type: FETCH_NOTICES, payload })
    } catch (error) {
        yield put({ type: FETCH_NOTICES, error })
    }
}

function* clearNotices({ payload }) {
    try {
        yield put({ type: CLEAR_NOTICES, payload })
    } catch (error) {
        yield put({ type: CLEAR_NOTICES, error })
    }
}

const globalSaga = function* () {
    yield takeEvery("global/fetchNotices", fetchNotices);
    yield takeEvery("global/clearNotices", clearNotices);
}

export default globalSaga;

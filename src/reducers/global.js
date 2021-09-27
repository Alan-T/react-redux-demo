import { FETCH_NOTICES, CLEAR_NOTICES } from '../actions/global';

const initState = {
    notices: [],
}

const global = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_NOTICES:
            return { ...state, notices: payload }
        case CLEAR_NOTICES:
            return { ...state, notices: payload }
        default:
            return state;
    }
}

export default global;
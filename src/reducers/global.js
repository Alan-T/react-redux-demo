import { UPDATE_TITLE } from '../actions/global';

const initState = {
    title: '我是标题',
    copyright: '我是版权'
}

const global = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_TITLE:
            return { ...state, title: payload.title, copyright: payload.copyright }
        default:
            return state;
    }
}

export default global;
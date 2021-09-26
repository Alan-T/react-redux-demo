
const initState = {
    title: '我是标题',
    copyright: '我是版权'
}

const global = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case 'setDefaultSetting':
            return { ...state, title: payload.title, copyright: payload.copyright }
        default:
            return state;
    }
}

export default global;
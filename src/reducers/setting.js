import defaultSettings from '../../config/defaultSettings';
import { UPDATE_SETTING } from '../actions/setting';

const initState = defaultSettings;

const setting = (state = initState, action) => {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_SETTING:
            return { ...state, ...payload }
        default:
            return state;
    }
}

export default setting;
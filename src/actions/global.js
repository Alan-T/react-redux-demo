'use strict';

export const UPDATE_TITLE = 'UPDATE_TITLE';

export const setDefaultSetting = (payload) => {
    return { type: UPDATE_TITLE, payload }
}
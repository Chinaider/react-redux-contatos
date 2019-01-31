import { SET_COLOR } from './constants';

export const setColor = (objColor) => {
    return {
        type: SET_COLOR,
        payload: objColor
    };
};
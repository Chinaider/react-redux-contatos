import { SET_COLOR } from './constants';

export const setColor = (objColor) => {
    return dispatch => {
        dispatch({
            type: SET_COLOR,
            payload: objColor
        }); 
    };
};
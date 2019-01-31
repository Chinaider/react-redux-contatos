import { SET_COLOR } from './constants';

const INITIAL_STATE = {
    loading:false,
    color:'#1565c0',
    textColor:'#ffffff'
};


export default (state = INITIAL_STATE, action) => {

    if(action.type == SET_COLOR){
        return {...state, color: action.payload.color, textColor: action.payload.textColor }
    }

    return state;
};
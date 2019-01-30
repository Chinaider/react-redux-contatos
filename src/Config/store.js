import { createStore, combineReducers } from 'redux';
import ConfiguracaoReducer from './../Modules/Configuracao/reducer';

export default configureStore = () => {

    const reducers = combineReducers({
        ConfiguracaoReducer: ConfiguracaoReducer
    });

    const store = createStore(reducers);

    return store;
};
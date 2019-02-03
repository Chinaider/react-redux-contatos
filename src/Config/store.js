import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ConfiguracaoReducer from './../Modules/Configuracao/reducer';

export default configureStore = () => {

    const reducers = combineReducers({
        ConfiguracaoReducer: ConfiguracaoReducer
    });

    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

    return store;
};
import {createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState
        //applyMiddleware(reduxImmutableStateInvariant) //se usa para asegurar la immutabilidad del store
                                                        //se pueden aplicar otros middlewares aqui, para conectar herramientas de dev en chrome, etc
    );
}
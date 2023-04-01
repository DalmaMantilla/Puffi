import { createStore, combineReducers, applyMiddleware, compose} from "redux"; //para combinar los reducers
import datosForm from '../reducer' 

import thunk from 'redux-thunk';


//Conecta con devTools de chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    datosForm, 
})


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store;
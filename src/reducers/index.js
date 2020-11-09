import { combineReducers } from "redux";
import documentosReducer from './documentosReducer';

export default combineReducers({
    documentos: documentosReducer
});
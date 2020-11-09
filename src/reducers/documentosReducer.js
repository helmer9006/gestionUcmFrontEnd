//CADA REDUCER TIENE SU PROPIO STATE
//IMPORTANDO TYPES
import {
  TRAER_DOCUMENTO,
  TRAER_DOCUMENTO_EXITO,
  TRAER_DOCUMENTO_ERROR,
} from "../types";

const initialState = {
  documentos: [],
  mensajeError: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRAER_DOCUMENTO:
      return {
        ...state,
        loading: action.payload,
      };
    case TRAER_DOCUMENTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        mensajeError: {},
        documentos: action.payload,
      };
      case TRAER_DOCUMENTO_ERROR:
        return {
          ...state,
          loading: false,
          mensajeError: action.payload,
          error: true,
          documentos: state,
        };  
    default:
      return state;
  }
}

//IMPORTANDO TYPES
import {
  TRAER_DOCUMENTO,
  TRAER_DOCUMENTO_EXITO,
  TRAER_DOCUMENTO_ERROR,
} from "../types";
import clienteAxios from "../config/axios.js";

//TRAER LOS DOCUMENTOS
//recibimos el tipo de documento y el numero de documento desde componente documento
export function traerDocumentosActions(busqueda) {
  return async (dispatch) => {
    dispatch(traerDocumento());
    let res;
    try {
      //consulta en la base de datos
      res = await clienteAxios.get(`/facturas/${busqueda}`);

      //si todo sale bien, actualizamos state
      dispatch(traerDocumentoExito(res.data));
    } catch (error) {
        //console.log(error.response.data);
        //console.log(error.response.status);
       //console.log(error.response.headers);
      dispatch(traerDocumentoError(error.response.data.mensaje));
    }
  };
}

//FUNCIONES - ACCIONES

const traerDocumento = (documento) => ({
  type: TRAER_DOCUMENTO,
  payload: true,
});

//si se traer el documento exitosamente del api
const traerDocumentoExito = (res) => ({
  type: TRAER_DOCUMENTO_EXITO,
  payload: res,
});

//si se presenta un error

const traerDocumentoError = (error) => ({
  type: TRAER_DOCUMENTO_ERROR,
  payload: error,
});

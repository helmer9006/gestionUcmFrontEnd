import React, { useState } from "react";
import { Card, Input, Tag, Select } from "antd";
import { useDispatch, useSelector } from "react-redux"; //para acceder al store

//ACTIONS DE REDUX
import { traerDocumentosActions } from "../actions/documentosActions";

import {
  FullscreenExitOutlined,
  AudioOutlined,
  SyncOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";
import TablaDocumentos from "./TablaDocumentos";

const Documentos = () => {
  const { Option } = Select;

  //STATE DEL COMPONENTE
  const [busqueda, setBusqueda] = useState(""); //state para guardar valor a buscar
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  //ACCEDER AL STATE GLOBAL O STORE
  const cargando = useSelector((state) => state.documentos.loading);
  const error = useSelector((state) => state.documentos.error);
  const mensajeError = useSelector((state) => state.documentos.mensajeError);
  const documentos = useSelector((state) => state.documentos.documentos);

  //utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  //mandar a llamar el action de documentoAction y enviar documenmto como parametro
  const traerDocumento = (busqueda) =>
    dispatch(traerDocumentosActions(busqueda));

  //cuano el usuario haga submit
  const submitTraerDocumento = (valor, e) => {
    e.preventDefault();
    //validar formulario
    if (valor.trim() === "") {
      return;
    }
    //si no hay errores

    //traer producto
    traerDocumento(valor);
  };

  //funcion para capturar evento de enter en input de busqueda
  const submitTraerDocumentoEnter = (e) => {
    e.preventDefault();

    //validar formulario
    console.log(e);
    //si no hay errores

    //mostrar producto
    traerDocumento();
  };

  //fin

  const { Search } = Input;

  //#region Tipos de Documentos - Selector
  function onChange(value) {
    setTipoDocumento(value);
    switch (value) {
      case "factura":
        setPlaceholder("Número Factura");
        break;
      case "historia":
        setPlaceholder("Ingresar Admisión");
        break;
      case "orden":
        setPlaceholder("Ingresar Admisión");
        break;
      default:
        break;
    }
  }

  //#endregion

  //#region DATOS PRUEBAS
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  //#endregion FIN DATOS PRUEBA

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Documentos"
        bordered={false}
        style={{ width: FullscreenExitOutlined }}
      >
        <form>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Tipo Documento"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ marginRight: "1rem" }}
          >
            <Option value="factura">Factura</Option>
            <Option value="historia">Historia</Option>
            <Option value="orden">Orden</Option>
          </Select>
          <Search
            placeholder={placeholder}
            onSearch={submitTraerDocumento}
            onPressEnter={submitTraerDocumentoEnter}
            style={{ width: 200 }}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {cargando ? (
            <Tag icon={<SyncOutlined spin />} color="processing" style={{padding: '.3rem', fontSize: '13px'}}>
              cargando
            </Tag>
          ) : null}
          {error ? (
            <Tag icon={<CloseCircleOutlined />} color="error" style={{padding: '.3rem',fontSize: '13px'}}>
              {mensajeError}
            </Tag>
          ) : null}
        </form>
      </Card>
      <TablaDocumentos documentos={documentos} />
      {/* <Table dataSource={dataSource} columns={columns} />; */}
    </div>
  );
};

export default Documentos;

import React from "react";
import { Table } from "antd";

const tablaDocumentos = ({ documentos }) => {
  const columns = [
    { title: "Factura", dataIndex: "factura", key: "factura" },
    { title: "Fecha", dataIndex: "fecha", key: "fecha" },
    { title: "Valor", dataIndex: "valor", key: "valor" },
    { title: "Admisión", dataIndex: "admision", key: "admision" },
    { title: "Apb", dataIndex: "apb", key: "apb" },
    {
      title: "Accción",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      factura: 1802526,
      fecha: "06-11-2020",
      valor: 1250000,
      admision: 895241,
      apb: "Coomeva EPS",
    },
    {
      key: 1,
      factura: 1802526,
      fecha: "06-11-2020",
      valor: 1250000,
      admision: 895241,
      apb: "Coomeva EPS",
    },
  ];
  let dataNew;
  if (!documentos.length) {
    dataNew = [];
  } else {
    documentos.map((documento) => {
      dataNew = [
        {
          key: documento.Numero,
          factura: documento.CONS_DOC_CONT,
          fecha: documento.Fecha,
          valor: documento.Valor,
          admision: documento.ID_ADMIS_ADXFAC,
          apb: documento.APB,
        },
      ];
    });
  }

  return <Table columns={columns} dataSource={dataNew} />;
};

export default tablaDocumentos;

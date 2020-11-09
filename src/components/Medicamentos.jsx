import React from "react";
import { Card, Input } from "antd";
//ACTIONS DE REDUX
import { crearNuevoProductoAction } from "../actions/documentosActions";
import { FullscreenExitOutlined, AudioOutlined } from "@ant-design/icons";

const Medicamentos = () => {
  return (
    <div className="site-card-border-less-wrapper">
    <Card
      title="Medicamentos"
      bordered={false}
      style={{ width: FullscreenExitOutlined }}
    >
      
    </Card>
  </div>
  );
};

export default Medicamentos;
import React, { useState } from "react";
import { Layout } from "antd";

import Documentos from "./components/Documentos";
import Usuarios from "./components/Usuarios";
import Configuracion from "./components/Configuracion";
import Medicamentos from "./components/Medicamentos";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Router>
      <Provider store={store}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo">
              {/* <img src="../assets/img/logo.png" alt=""/> */}
            </div>
            <Menu />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "20px 16px" }}>
              <Switch>
                <Route exact path="/documentos" component={Documentos} />
                <Route exact path="/medicamentos" component={Medicamentos} />
                <Route exact path="/configuracion" component={Configuracion} />
                <Route exact path="/usuarios" component={Usuarios} />
                <Route exact path="/" component={Documentos} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Gestión UCM ©2020 Creado por Helmer Villarreal
            </Footer>
          </Layout>
        </Layout>
      </Provider>
    </Router>
  );
};

export default App;

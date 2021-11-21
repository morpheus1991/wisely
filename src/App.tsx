import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TemplateBasic from "./components/templates/TemplateBasic";
import TempArticle from "./components/TempArticle";
import Logo from "./components/UI/svg/Logo";
import GlobalStyle from "./styles/GlobalStyle";
import ShavingGelProductDetail from "./components/pages/ShavingGelProductDetail";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact={true} component={ProductDetail}></Route>
        <Route
          path="/product-detail"
          component={ShavingGelProductDetail}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;

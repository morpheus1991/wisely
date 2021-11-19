import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TemplateBasic from "./components/templates/TemplateBasic";
import TempArticle from "./components/TempArticle";
import Logo from "./components/UI/svg/Logo";
import GlobalStyle from "./styles/GlobalStyle";
import ShavingGelProductDetail from "./components/pages/ShavingGelProductDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ShavingGelProductDetail></ShavingGelProductDetail>
    </div>
  );
}

export default App;
